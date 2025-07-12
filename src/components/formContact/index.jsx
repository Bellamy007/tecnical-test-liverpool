import { useState } from "react";
import './index.css'

function FormContact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        reason: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form enviado 🟢 ${JSON.stringify(formData)}`);
    };

    return (
        <form className="form-contact" onSubmit={handleSubmit}>
            <h2>Contáctanos</h2>

            <label>
                Nombre
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Motivo
                <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="ventas">Consultas de ventas</option>
                    <option value="otros">Otros</option>
                </select>
            </label>
            <label>
                Mensaje
                <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">Enviar mensaje</button>
        </form>
    );
}
export { FormContact }