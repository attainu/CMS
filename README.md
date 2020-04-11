# Project Report Link

    https://docs.google.com/document/d/1bqghi-T6iiYl2VvCqCBqE2dU410wLxLXtLVjoAdMEco/edit?usp=sharing

# Deployment link for mongo atlas
	# for server: https://perfect-fitnessh.herokuapp.com
	# for client: https://agile-shelf-89927.herokuapp.com

# Deployment link for Elephant sql
	# for server: https://perfect-fitnessn.herokuapp.com
	# for client: https://paymentperfect-fitness.herokuapp.com

# Perfect-Fitness
Project done by Nilesh and Himanshu


# End Points


# Request Type :- POST    Route :-  /admin/register
	
	Using this route we can register Admin.
	
# Request Type :- POST    Route :-  /login

    This is a common route for Admin, Trainer and User . They can Login to system By providing valid credentials.


# Request Type :- POST    Route :-  /forgot-password

    This is a common route for Admin, Trainer and User . They can get reset password email by providing registered email of user and perEmail for admin and trainer.

# Request Type :- POST    Route :-  /reset/:resetToken

	This is a common route for Admin, Trainer and User. They can reset their 
	password using this route by adding required details.
	
# Request Type :- POST   Route :- /change-password
	
	This is a common route for Admin, Trainer and User. After login they can.
	change their password. Accesstoken of respective personality is required in header.    
 
# Request Type :- POST   Route :- /add/product

    Registered Admin can add products using this route after login to the 
    System. Access Token of logged admin is required in header. 
 
# Request Type :- PATCH     Route:-  /update/product/:productId
	
	Registered Admin can update products using this route after login to the 
	System.  Access Token of logged admin is required in the header. 


# Request Type :- GET     Route:-  /searchproduct

    Users can get searched products by passing product name , category ,brand in product query. For pagination page and size in query are required. In mongo for protein search p must be in uppercase.

# Request Type :- GET     Route:-  /all/product

	Users can get all the products. For pagination  page and size in query are 
	required.
	
# Request Type :- GET     Route:-  /single/product

	Using this route user can get details of the product. By providing productId in 
	Params.	

# Request Type :- GET     Route:-  /product/supplements

	Using this route users can get all the supplements.

# Request Type :- GET     Route:-  /product/gymwears

	Using this route users can get all the gym wears.

# Request Type :- GET     Route:-  /product/gymgears

    Using this route users can get all the gymgears.

# Request Type :- DELETE     Route:-  /delete/items/:commanId

	This is a common route for deleting products , membership and gyms.
	Admin can delete these things. Header is required.

# Request Type :- POST     Route:-  /add/gym

    Using this route, registered admins can add gym after login. Header of admin
    is required.	

# Request Type :- PATCH     Route:-  /update/gym/:gymId

    Using this route, registered admins can update the gym after login. Header
    of admin is required.	 

# Request Type :- GET     Route:-  /findgym/:place

	Users can search gyms by country , state ,city. First letter of place must be 
	capital.

# Request Type :- GET     Route:-  /findgym/country/:country

	Users can get gyms In India.

# Request Type :- GET     Route:-  /findgym/state/:state

	Users can see gyms located in states.

# Request Type :- GET     Route:-  /findgym/city/:city

	Users can get all the details of the gym located in a particular city.

# Request Type :- POST     Route:-  /add/membership/:gymId

    Using this route, registered admins can add gym’s duration of membership
    and price of the membership for a particular gym after login. Header of 
    admin is required.

# Request Type :- PATCH     Route:-  /update/membership/:MSId

    Using this route, registered admins can update  gym’s duration of 
    membership , price of the membership for a particular gym after login. 
    Header of admin is required.

# Request Type :- GET     Route:-  /findMS/:place

	Users can search memberships available by country , state ,city.

# Request Type :- GET     Route:-  /findMS/country/:country

	Users can get memberships available In India.

# Request Type :- GET     Route:-  /findgMS/state/:state

	Users can see memberships available located in states.

# Request Type :- GET     Route:-  /findMS/city/:city

	Users can get all the details of the memberships available  in a particular    
	City.

# Request Type :- POST     Route:-  /add/trainer/

	Using this route admin can hire a trainer and send a mail containing his 
	Credentials. Header of admin is required.

# Request Type :- GET      Route :- /trainer/confirm/:confirmToken

	This route will be sent in the confirmation email to trainer by clicking on this
    link the trainer can confirm his account. 
 	
# Request Type :- GET       Route :- /alltrainer

	Using this route user can view all the trainers listed in the gym.

# Request Type :- GET       Route :- /single/trainer/:trainerId

	Using this route we can get all the details of a single trainer and what diet 
	and workout plan the trainer has added.

# Request Type :- POST     Route:-  /add/workout-diet

	This is a common route for adding workout plans and diet plans. Trainer can 
	add both after login. Trainer header is required.
 
	
# Route Type :- PATCH    Route :-  /update/WO-DP/:commanId

	This is a common route for adding workout plans and diet plans. Trainer can 
	Update both after login. Trainer header is required.

# Request Type :- DELETE     Route:-  /delete/items/:commanId

	This is a common route for deleting workout plans and diet plans.
	Trainer can delete these things. Trainer header is required.

# Request Type :- GET     Route:-  /alldiet

	Users will be able to access all the diet plans of every category.

# Request Type :- GET     Route:-  /diet/veg

	Users will be able to access  diet plans of veg food categories.

# Request Type :- GET     Route:-  /diet/non-veg

	Users will be able to access  diet plans of non-veg category categories.

# Request Type :- GET     Route:-  /diet/kitto

	Users will be able to access  diet plans of the kitto diet category.

# Request Type :- GET     Route:-  /allworkout

	Users will be able to access all the workout plans of every category.

# Request Type :- GET     Route:-  /workout/beginner

	Users will be able to access  workout plans of the beginner category.

# Request Type :- GET     Route:-  /workout/intermediate

	Users will be able to access  workout plans of the intermediate category.

# Request Type :- GET     Route:-  /workout/professional

	Users will be able to access workout plans of the professional category.

# Request Type :- DELETE     Route:-  /delete/trainer/:trainerId

	Admin can remove a trainer by providing a trainer id after login. Admin 
	header is required.

# Request Type :- POST    Route :-  /user/register
	
	Using this route  users can register themselves.

# Request Type :- GET      Route :- /user/profile
	
	Using this route user can view his profile. User header is required.

# Request Type :- GET     Route :- /user/google

	A user can via google using this route.

# Request Type :- GET     Route :- /user/facebook

	A user can via facebook using this route.

# Request Type :- GET     Route :- /confirm/:confirmToken

	This route will be sent in the confirmation email of user by clicking on this 
	link the user can confirm his account.
	

# Request Type :- POST    Route :- /user/create-password

	This route will allow the user to set a password after they are logged in 
	through google and facebook. User header is required.

# Request Type :- POST    Route :- /add/cart/:productId

	Using this route users can add products to the cart. User has to provide the 
	access token in the authorization header.

# Request Type :- POST    Route :- /increaseQuantity/:productId

	Using this route users can increase the product quantity in the cart. User has 
	to provide the access token in the authorization header. 
	
	
# Request Type :- POST    Route :- /decreaseQuantity/:productId

    Using this route users can increase the product quantity in the cart. User has 
	to provide the access token in the authorization header. 
	

# Request Type :- GET       Route :- /get/cart

	This route will help users to view his cart and what product he has added
    into the cart. User has to provide the access token in the authorization 
    header.  
 
# Request Type :- POST     Route :- /order/:productId
	
	Using this route user can buy a single product ,membership , trainer , 
	workout plan , dietplan. User has to provide the access token in the
    authorization header.    

# Request Type :- POST     Route :- /cart/order
	
	Using this route users can buy a thing which ever he has added to the cart.
    User has to provide the access token in the authorization header.
	
# Request Type :- POST     Route :- /verify
	
	Using this route admin can verify the payment made by the user to razorpay
    and capture the payment. Admin header is required for the verification. 
 
# Request Type :- POST      Route :- /add/review/:productId

	Using this route users can add reviews for the product. User header is 
	required.


# Request Type :- PATCH      Route :- /update/review/:reviewId

	Using this route users can update reviews for the product. User header is
    required.    

# Request Type :- DELETE      Route :- /delete/review/:reviewId

	Using this route users can delete reviews for the product.User header is 
	required.

# Request Type :- GET      Route :- /getreview/:productId
	
	This route will allow users to see review added by the users for a particular 
	Product.
