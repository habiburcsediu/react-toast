import { useEffect } from "react";

export default function Toast({ toastList, position, setList }) {
  const deleteToast = (deletedToastId) => {
    const filteredToastList = toastList.filter((toast, index) => {
      return toast.id !== deletedToastId;
    });
    setList(filteredToastList);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);

  return (
    <div className="fixed right-2 top-2 flex flex-col gap-2 text-white">
      {toastList.map((toast, index) => (
        <div
          className="c-toast-slide w-[300px] flex relative px-3 py-2 rounded shadow"
          style={{ backgroundColor: toast.backgroundColor }}
          key={index}
        >
          <button
            onClick={() => deleteToast(toast.id)}
            className="absolute top-3 right-3"
          >
            X
          </button>
          <div>
            <h3 className="text-lg">{toast.title}</h3>
            <p className="text-sm">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
