import { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';



const services = [
  'Haircut',
  'Hair Coloring',
  'Deep Conditioning',
  'Bridal Styling',
  'Event Styling'
];

const stylists = [
  'Emily Johnson',
  'Michael Lee',
  'Sarah Brown'
];

const Booking = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [service, setService] = useState('');
  const [stylist, setStylist] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/bookings', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body:JSON.stringify({name,email,date,service,stylist})
    })

    if (response.ok) {
      alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times.`);
      navigate('/');
    } else {
      alert('Booking failed. Please try again.')
    }
  };


  return(
  <div>
    <h2>Book an Appointment</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input type= "text" 
        id = 'name' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor='email'>Email</label>
      <input type= "text" 
        id = 'email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Date:</label>
      <Calendar
        onChange={setDate}
        value={date}
        required
      />
      <p>Selcted Date {date.toLocaleDateString()}</p>
      <label htmlFor='services'>Services:</label>
      <select 
        id = 'services' 
        value={service}  
        onChange={(e) => setService(e.target.value)}
        required
      >
        <option value="" disabled>Select a Service</option>
        {services.map((service,index) => (
          <option key={index} value={service}>{service}</option>
        ))}
      </select>
      <label htmlFor='stylist'>Stylist:</label>
      <select 
        id = 'stylist' 
        value={stylist}  
        onChange={(e) => setStylist(e.target.value)}
      >
        <option value="" disabled>Select a Stylist (optional)</option>
        {stylists.map((stylist,index) => (
          <option key={index} value={stylist}>{stylist}</option>
        ))}
        </select>
        <button type='submit'>Book</button>
    </form>
  </div>
  )
}

export default Booking;