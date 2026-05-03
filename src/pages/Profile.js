function Profile({ name, setName }) {
  const handleChange = (e) => {
    setName(e.target.value); 
  };

  return (
    <div className="page">
      <h2>Твой профиль</h2>
      <img src="https://robohash.org/quest?set=set4" alt="Avatar" style={{width: '100px'}} />
      
      <p>Введите ваше имя героя:</p>
      <input 
        type="text" 
        value={name} 
        onChange={handleChange} 
        placeholder="Твое имя..."
      />
      
      <div className="preview">
        <p>Сейчас тебя зовут: <strong>{name}</strong></p>
      </div>
    </div>
  );
}

export default Profile;