import { atom, useRecoilState } from "recoil";

export type ModalType = "createServer";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
}

const modalState = atom<Pick<ModalStore, "type" | "isOpen">>({
  key: "modalState",
  default: {
    type: null,
    isOpen: false,
  },
});

export const useModal = (): ModalStore => {
  const [state, setState] = useRecoilState(modalState);

  const onOpen = (type: ModalType) => {
    setState({
      isOpen: true,
      type,
    });
  };

  const onClose = () => {
    setState({
      type: null,
      isOpen: false,
    });
  };

  return {
    ...state,
    onOpen,
    onClose,
  };
};
