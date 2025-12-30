import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrEditItem = () => {
    if (input.trim() === "") return;

    const inputLower = input.trim().toLowerCase();
    const duplicateIndex = items.findIndex(
      (item, index) =>
        item.toLowerCase() === inputLower && index !== editIndex
    );

    if (duplicateIndex !== -1) {
      alert("Ten element już jest na liście!");
      return;
    }

    if (editIndex !== null) {
      const newItems = [...items];
      newItems[editIndex] = input;
      setItems(newItems);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }

    setInput("");
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    if (editIndex === index) setEditIndex(null);
  };

  const editItem = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #ece9e6, #ffffff)",
        fontFamily: "Arial",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",        // teraz kontener wypełnia całe okno
          maxWidth: "800px",    // ograniczenie, żeby nie było zbyt szeroko
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#34495e", marginBottom: "25px" }}>
          Lista zakupów
        </h1>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Dodaj produkt"
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #bdc3c7",
              fontSize: "16px",
            }}
          />
          <button
            onClick={addOrEditItem}
            style={{
              padding: "10px 15px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#3498db",
              color: "#fff",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {editIndex !== null ? "Edytuj" : "Dodaj"}
          </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                color: "#2c3e50",
                padding: "12px 15px",
                marginBottom: "10px",
                borderRadius: "6px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
                transition: "transform 0.1s",
              }}
            >
              <span>{item}</span>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => editItem(index)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#f39c12",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Edytuj
                </button>
                <button
                  onClick={() => removeItem(index)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "4px",
                    border: "none",
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Usuń
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
