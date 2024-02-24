"use client";
import { MdClose } from "react-icons/md";

type KeySantri = {
  nama: string;
  nim: number;
  orangtua: string;
  id_kelas: number;
  alamat: string;
  id_card: number;
  saldo: number;
  id: string;
  no_tabungan: string;
};

// async function deleteById(id) {
//   try {
//     const response = await fetch(`http://localhost:5000/santri/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//         // You may need to include additional headers like authorization token if required
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Failed to delete data');
//     }

//     const data = await response.json();
//     return data; // Returning any response data if needed
//   } catch (error) {
//     console.error('Error deleting data:', error);
//     throw error;
//   }
// }

export default function DeleteSantri({paramDelete, onClose} :any) {
  // console.log('ModalDelete item', paramDelete) // const id = paramDelete.id;
  const handleDelete = async (e) => {
    e.preventDefault();
    const id1 = paramDelete.id;
    try {
    const id2 = paramDelete.id;
      try {
        const response = await fetch(`http://localhost:5000/santri/${id2}`, {
          method: 'DELETE',
        });
        console.log('id2', id2, 'id1', id1)
        if (!response.ok) {
          throw new Error('Failed to delete data line 53');
        }
        // const data = await response.json();
        // return data; // Returning any response data if needed
      } catch (error) {
        console.error('Error deleting data line 59 :', error);
        throw error;
      }
      onClose(); // Close modal or perform any other action after deletion
    } catch (error) {
      console.error('Failed to delete data line 64 :', error);
    }
  };

  return (
    <section>
      <div
        id="default-modal"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full bg-gray-700/75"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg border border-blue-400 shadow">
            {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Are You Sure to Delete Profil of <span className="bg-yellow-300 rounded-md p-2">{paramDelete?.nama}</span> 
                </h3>
                <button
                  type="button"
                  className="text-gray-700 bg-transparent hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  data-modal-hide="default-modal"
                  onClick={onClose}
                >
                  <MdClose />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              {!!paramDelete ? (
                <section className="flex flex-col justify-center items-center py-8 gap-3"> 
                  <span className="text-4xl text-red-600 font-extrabold capitalize py-5 px-4 text-center mb-3">are you sure to delete it?</span>   
                  <div className="px-5 flex justify-center items-center gap-2">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="bg-gray-100 border border-gray-400 hover:bg-gray-400 text-black focus:outline-none focus:ring-4 focus:ring-gray-200  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                  </div>
                </section>
              ) : (
                <div className="text-2xl text-red-600 text-bold py-5 px-4 text-center"> error when sending `paramDelete` as props </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}
