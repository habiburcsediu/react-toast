import { useState } from "react";
import Button from "./components/Button";
import Toast from "./components/Toast";

export default function App() {
  const [list, setList] = useState([]);
  let toastProperties = [];
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#198754",
        };
        break;
      case "danger":
        toastProperties = {
          id: 2,
          title: "Danger",
          description: "This is a Danger toast component",
          backgroundColor: "#DC3545",
        };
        break;
      case "info":
        toastProperties = {
          id: 3,
          title: "Info",
          description: "This is a info toast component",
          backgroundColor: "#0DCAF0",
        };
        break;
      case "warning":
        toastProperties = {
          id: 4,
          title: "Warning",
          description: "This is a warning toast component",
          backgroundColor: "#FFC107",
        };
        break;
      default:
        toastProperties = {};
    }
    setList([...list, toastProperties]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1>React Toast Component</h1>
      <div className="flex gap-3">
        <Button handleClick={() => showToast("success")}>Success</Button>
        <Button handleClick={() => showToast("danger")}>Danger</Button>
        <Button handleClick={() => showToast("info")}>Info</Button>
        <Button handleClick={() => showToast("warning")}>Warning</Button>
      </div>
      <Toast toastList={list} position="right-bottom" setList={setList} />
    </div>
  );
}
