# 🌍 Wandeerlust

**Live Site:** [https://air-bnb-ptha.onrender.com/](https://air-bnb-ptha.onrender.com/)

Wandeerlust is a full-featured travel listing and review platform inspired by Airbnb. Users can browse, create, edit, and review listings. It includes full authentication, form validation, clean UI components, and error handling. Built with the **MERN**-inspired stack (MongoDB, Express, Node.js) and EJS templating.

---

## 🚀 Features

- 🧭 View listings with images, descriptions, and locations
- 📝 User authentication and authorization
- ✍️ Leave reviews on listings
- 🧾 CRUD functionality for listings and reviews
- 🔐 Secure routes with validation and error handling
- 🖼️ Upload images using Multer
- 🌐 Responsive EJS templates with Bootstrap-styled views
- 🌍 Deployed on Render

---

## 📁 Folder Structure

```
.
├── controllers/       # Route logic for listings, users, and reviews
├── models/            # Mongoose models
├── routes/            # Express route handlers
├── public/            # Public files
│   ├── css/           # CSS files
│   ├── js/            # Javascript files
├── views/             # EJS templates
│   ├── listings/      # Listing-related views (edit, index, new, show)
│   ├── users/         # Authentication-related views
│   └── includes/      # Partials for layout
├── middleware.js      # Custom middleware (e.g. authentication, validation)
├── app.js             # Main Express app
├── cloudconfig.js     # Cloudinary config for image uploads
├── .env               # Environment variables
```

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Frontend**: EJS + Bootstrap
- **Auth**: Passport.js, express-session
- **Validation**: Joi
- **File Uploads**: Multer, Cloudinary
- **Deployment**: Render

---

## 🧑‍💻 Getting Started

### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wandeerlust.git
   cd wandeerlust
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up `.env`:
   ```env
   DB_URL=mongodb://localhost:27017/wandeerlust
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_key
   CLOUDINARY_SECRET=your_secret
   SECRET=your_session_secret
   ```

4. Start the server:
   ```bash
   node app.js
   ```

### 🔗 Visit:
Navigate to `http://localhost:8080` (or the Render live link).

---

## ✅ TODOs

- [x] Basic CRUD for listings
- [x] Review system with ratings
- [x] Authentication system
- [x] File uploads to Cloudinary
- [x] Error handling
- [ ] Mobile responsiveness enhancements
- [ ] Map integration (optional)

---

## 🤝 Acknowledgements

Inspired by Airbnb and Colt Steele's Web Dev Bootcamp. Special thanks to the open-source community for tools and inspiration.
