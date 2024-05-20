import * as S from "./style";
import { useRouter } from "next/navigation";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { XIcon } from "@/asset/svg";
import { RegexsData } from "@/asset/RegexsData";
import { createDMRoom } from "@/api/chat";
import { useModal } from "@/hooks/useModalStore";
import { CreateDMForm } from "@/types/Chat";

const CreateDMModal = () => {
  const router = useRouter();
  const { isOpen, type, onClose } = useModal();
  const { register, handleSubmit, reset } = useForm<CreateDMForm>();
  const isModalOpen = isOpen && type === "createServer";

  if (!isModalOpen) return null;

  const onInvalid: SubmitErrorHandler<CreateDMForm> = (state) => {
    if (state.email?.message) return alert(state.email?.message);
  };
  const onValid: SubmitHandler<CreateDMForm> = async (state) => {
    if (!state.email) return;
    const data = await createDMRoom(state.email);
    if (data) {
      reset();
      router.push(`/${data.chat_room_id}`);
      onClose();
    }
  };

  return (
    <S.Layer>
      <S.ModalTitle>
        <p>상대방 이메일을 입력해주세요</p>
        <XIcon onClick={onClose} />
      </S.ModalTitle>
      <S.ModalField>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: RegexsData.EMAIL,
              message: "이메일형식에 맞게 입력해주세요.",
            },
          })}
          placeholder={"이메일을 입력해주세요"}
          type={"text"}
        />
      </S.ModalField>
      <S.Footer>
        <S.ModalButton onClick={handleSubmit(onValid, onInvalid)}>
          만들기
        </S.ModalButton>
      </S.Footer>
    </S.Layer>
  );
};

export default CreateDMModal;
