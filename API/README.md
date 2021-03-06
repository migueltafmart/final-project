![cuidar al cuidador](https://cuidaralcuidador.herokuapp.com/api/logo)
# Cuidar al cuidador API
*Cuidar al cuidador API is a project for Fundación Luzón that aims to put the families and caretakers of ALS patients in contact with companies who undersand the predicament they're in.*

##  Public Endpoints
### **GET** *Gets offers from the database*
	/api/offers/[(company ID)]
- With a parameter returns: **all the offers from a company on the database**
- Without parameters returns: **all the offers on the database**

### **GET** *Gets a single offer from the database*
	/api/offer/(offer ID)
 - returns: **an offer on the database**

### **POST** *Sends email and password to the database*
	/api/login
 - returns: **all session data from the logged-in user**

##  Private Endpoints
*Require an API key that refers to each of the users and their role*

### **GET** *Gets user's information from the database*
	/api/user/(user ID)
 - returns: **information from user database** 

### **GET** *Gets a company's information from the database*
	/api/company/(user ID)
 - returns: **information from the selected company  on the database**

### **GET** *Gets a caretaker's information from the database*
	/api/company/(user ID)
 - returns: **information from the selected caretaker on the database**

### **GET** *Gets all the companies from the database*
	/api/companies
 - returns: **information from the all companies on the database**

### **GET** *Gets a match's information from the database*
	/api/match/(match ID)
 - returns: **information from the selected match on the database**

### **GET** *Gets all matches for the given offer from the database*
*Just for company accounts*

	/api/offer/(offer ID)/match ID
 - returns: **information from the users who matched with the given offer**

### **GET** *Gets the information for the given education id from the database*
	/api/education/(education ID)
 - returns: **Education entry info**

### **GET** *Gets the information for the given experience id from the database*
	/api/experience/(experience ID)
 - returns: **Experience entry info**

### **GET** *Gets all the education from the given caretaker id from the database*
	/api/caretaker/(caretaker ID)/education
 - returns: **All education data from the selected user**

### **GET** *Gets all the experience from the given caretaker id from the database*
	/api/caretaker/(caretaker ID)/experience
 - returns: **All experience data from the selected user**

 ### **POST** *Signs up an account to the database*
 *Just for admin accounts*
 
	/api/signup
 - returns: **The created offer from the database**

### **POST** *Posts an offer to the database*
 *Just for company accounts*
 
	/api/offer/(company ID)
 - returns: **The created offer from the database**

### **POST** *Posts an match to the database*
 *Just for caretaker accounts*
 
	/api/offer/(company ID)
 - returns: **The created match from the database**

### **POST** *Posts an education entry to the database*
 *Just for caretaker accounts*
 
	/api/caretaker/(caretaker ID)/education
 - returns: **The created education entry from the database**

### **POST** *Posts an education entry to the database*
 *Just for caretaker accounts*
 
	/api/caretaker/(caretaker ID)/education
 - returns: **The created education entry from the database**

### **PUT** *Edits an offer posted on the database*
 *Just for company accounts*
 
	/api/offer/(offer ID)/education
 - returns: **The updated offer from the database**

### **PUT** *Edits a match posted on the database*
 *Just for company accounts*
 
	/api/match/(match ID)/education
 - returns: **The updated match from the database**

### **PUT** *Edits an education entry posted on the database*
 *Just for caretaker accounts*
 
	/api/education/(education ID)
 - returns: **The updated education entry from the database**

### **PUT** *Edits an experience entry posted on the database*
 *Just for caretaker accounts*
 
	/api/experience/(experience ID)
 - returns: **The updated experience entry from the database**

### **PUT** *Edits the account posted on the database*
 
	/api/experience/(experience ID)
 - returns: **The updated information from the user from the database**

### **DELETE** *Deletes an offer posted on the database*
 *Just for company accounts*
 
	/api/offer/(offer ID)
 - returns: **The number of rows affected**

### **DELETE** *Deletes an match posted on the database*
 
	/api/match/(match ID)
 - returns: **The number of rows affected**

### **DELETE** *Deletes an education entry posted on the database*
 
	/api/education/(education ID)
 - returns: **The number of rows affected**

### **DELETE** *Deletes an experience entry posted on the database*
*Just for caretaker accounts*
 
	/api/experience/(experience ID)
 - returns: **The number of rows affected**

### **DELETE** *Deletes an user account posted on the database*
*Just for caretaker accounts*
 
	/api/user/(user ID)
 - returns: **The number of rows affected**