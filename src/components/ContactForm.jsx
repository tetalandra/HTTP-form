import useInput from "./useInput";
import './ContactForm.css'

export default function ContactForm({ onAdd }) {
  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.value.includes("@")) return alert("Invalid email");
    onAdd({ name: name.value, email: email.value });
    name.reset(); email.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name.value} onChange={name.onChange} placeholder="Name" className="input" /><br/>
      <input value={email.value} onChange={email.onChange} placeholder="Email" className="input" /><br/>
      <button type="submit">Add Contact</button>
    </form>
  );
}
