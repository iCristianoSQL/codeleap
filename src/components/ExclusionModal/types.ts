import { ModalProps } from "../../utils/@types";

export interface IExclusionModalProps extends ModalProps {
    id: number;
    handleCloseModal: () => void;
}