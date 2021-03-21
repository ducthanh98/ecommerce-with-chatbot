import {Modal} from 'antd'
import {Role} from "./model";

const styles = {
    textBold: {
        fontWeight: 'bold',
    }
}

interface Props {
    dataModal: Role
    visible: false,
    setShowModal: Function
}

export const RoleModal = (props: Props) => {
    const {dataModal, visible, setShowModal} = props

    return (
        <div>
            <Modal
                title={dataModal.name}
                visible={visible}
                onCancel={() => setShowModal(false)}
                footer=''
            >

            </Modal>
        </div>
    );
}