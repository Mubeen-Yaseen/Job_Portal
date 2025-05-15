Date: 7/5/25
Job Portal Project

Open Vs code then its terminal
Make Vite app and then add tailwind css

Add Additional Packages:
🔹 npm install react-router-dom
Yeh package React app ke andar "pages" banane ke liye hota hai.Tumhari app mein jab user /home ya /about pe click kare, to page bina reload ke change ho jaye — yeh kaam React Router karta hai.
🔹 npm install quill
Yeh ek text editor hota hai — jaise Microsoft Word. User isme likh sakta hai, bold, italic kar sakta hai, images insert kar sakta hai, headings de sakta hai.
🔹 npm install react-toastify
Yeh chhoti si notification dikhata hai screen pe. Jaise "Success! Form submit ho gaya" ya "Error! Something went wrong" — yeh message screen ke corner pe pop-up jaisa aata hai
.
Manage Data for  project in Assets directory like logos, img, and temporary data for jobs.
Make Home page , apply jobs , Application page in pages dir…
Making it rout in App.jsx and replace strictmode in main.jsx with BrowserRouter and aslo import it from react-router-dom.

-----------------------------------------------------////////////////////////////////////---------------------------------------------------------------
StrictMode in React
 <React.StrictMode> ek tool hai jo sirf development mode mein kaam karta hai. Yeh React app ke code ko check karta hai taake tum:
galtiyan jaldi pakad sako
deprecated (purani) cheeze use na karo
best practices follow karo

-----------------------------------------------------////////////////////////////////////---------------------------------------------------------------
BrowserRouter in React Router
 <BrowserRouter> 
Agar user /about likhe URL mein, to React ko samaj aaye ke "bhai ko About  page dikhana hai".🧠 Yeh React Router ka base wrapper hota hai — iske bina routing kaam nahi karegi.

-----------------------------------------------------////////////////////////////////////---------------------------------------------------------------
<createContext()> is use to avoid props drilling 
# 📌 React Context – Prop Drilling Se Nijaat

👉 `createContext()` ki madad se hum kisi bhi component ko **direct data** de sakte hain — bina props ko har level par bhejne ke.

🌀 Agar Context na ho, to humein **prop drilling** karni padti hai.

### 🔄 Example (Story Style):

Agar **Grandfather** ko koi data **Potay** ko dena hai,  
to pehle **Father** (parent) ko dena padega,  
phir wo **Potay** (grandchild) ko dega.  
Yani unnecessary middleman ban raha hai.

✅ **Context** ki madad se **Grandchild** seedha **Grandfather** se data le sakta hai,  
binā parent ko involve kiye.

-----------------------------------------------------////////////////////////////////////---------------------------------------------------------------
The use of <container> in tailwindcss
<container>: ek max-width laga deta hai (jaise 1280px ya 1536px depending on screen).Or baki space chor daita ha jis ko mx-auto handle krta ha
<mx-auto>: ya baki space ko left/right mai divide kr daita ha jis sy container screen ke center mai ho jata ha.
<mx-sm:text-xd>👉 Only on small screens (≤ 640px), set the text size to extra small (12px).
-----------------------------------------------------////////////////////////////////////---------------------------------------------------------------

 Now! We are going to using clerk <clerk> for user Auth....
 ----->  Go to clerk and sign-in and after
 ----->  Put you Application Name like Job Portal
 ----->  Select FrameWork Like react and run the dependies 
 ----->  Follow complete page guidelines in your project. 
 ----->  Enable name in configure section in clerk is for user to change their name {optional}. 
 Next is: Here we use onclick on button  When I click on Login Button then A login Pop-Show by Clerk 
 We use useUser provided by clerk that verify user is login or Not



