// ---------------------------------------------------------------------------------------------------------------------------- //

// Modèle User
class User {
    constructor(FirstName, LastName,Sex, Birthdate, Phone, Fix, Email, Kind, Password) {
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.Sex = Sex;
      this.Birthdate = Birthdate;
      this.Phone = Phone;
      this.Fix = Fix;
      this.Email = Email;
      this.Kind = Kind;
      this.Password = Password;
    }
  
    createUser() {
      const query = "INSERT INTO User (FirstName, LastName, Sex, Birthdate, Phone, Fix, Email, Kind, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [this.FirstName, this.LastName, this.Sex, this.Birthdate, this.Phone, this.Fix, this.Email, this.Kind, this.Password];
  
      return new Promise((resolve, reject) => {
        connection.query(query, values, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results.insertId);
          }
        });
      });
    }
  }