import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabins-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabins-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </>
  );
}

// function AddCabin() {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setShowForm((showForm) => !showForm)}>
//         Add new cabin
//       </Button>
//       {showForm && (
//         <Modal onCloseModal={() => setShowForm(false)}>
//           <CreateCabinForm onCloseModal={() => setShowForm(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
