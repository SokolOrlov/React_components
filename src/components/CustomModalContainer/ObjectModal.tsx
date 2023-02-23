import { Modal } from "../Modal/Modal";
import { useCustomModal } from "./Container";
import ObjectModalStore from "./Store"; 

const ObjectModal = () => {
  const show = ObjectModalStore((store) => store.show);
  const objectId = ObjectModalStore((store) => store.id);
  const objectModal = useCustomModal();

  //Сохранить изменения
  const save = async () => {
    objectModal.callback();
    objectModal.close();
  };

  //закрыть модальное окно
  const close = () => {
    objectModal.close();
  };

  return (
    <Modal title={objectId?"Редактирование":"Добавление"} onClose={close} show={show}>
      <div style={{margin:"15px"}}>
        <div>
          <input type="text" />
        </div>
        <div style={{marginTop: "15px",display: "flex", justifyContent: "space-between"}}>
          <button onClick={close}>Cancel</button>
          <button onClick={save}>Save</button>
        </div>
      </div>
    </Modal>
  );
};

export default ObjectModal;
