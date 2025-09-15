# URL Shortener API 🔗

A powerful and efficient URL shortening service built with NestJS, providing a clean API for creating and managing shortened URLs.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **URL Redirection**: Seamless redirection from shortened URLs to original destinations
- **RESTful API**: Clean and intuitive API endpoints
- **JSON Response Format**: Structured data responses
- **Local Development Ready**: Easy setup for development environment

## 🛠️ Tech Stack

- **Framework**: NestJS
- **Runtime**: Node.js
- **API Testing**: Configured for tools like Postman/Insomnia
- **Architecture**: RESTful API design

## 📁 Project Structure

```
url-shortener/
├── src/
│   ├── url/
│   │   ├── controllers/
│   │   ├── services/
│   │   └── dto/
│   └── app.module.ts
├── test/
├── package.json
└── README.md
```

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hilalahmad0101/urlshortner-nestjs.git
   cd urlshortner-nestjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

The API will be available at `http://localhost:3000`

## 📚 API Endpoints

### Create Short URL
```http
POST /url
Content-Type: application/json

{
  "originalUrl": "https://facebook.com"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:3000/url/sXJ6Q1F9r",
  "originalUrl": "https://facebook.com",
  "id": "sXJ6Q1F9r"
}
```

### Get Original URL
```http
GET /url/:id
```

**Response:**
```json
{
  "originalUrl": "https://facebook.com",
  "shortUrl": "http://localhost:3000/url/sXJ6Q1F9r"
}
```

### Redirect to Original URL
```http
GET /url/:id/redirect
```

Automatically redirects to the original URL.

## 🧪 Testing the API

You can test the API using tools like:
- **Postman**: Import the requests using the provided endpoints
- **curl**: Command line testing
- **Insomnia**: REST client testing

### Example with curl:
```bash
# Create a short URL
curl -X POST http://localhost:3000/url \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "https://facebook.com"}'

# Get original URL
curl http://localhost:3000/url/sXJ6Q1F9r

# Test redirect
curl -L http://localhost:3000/url/sXJ6Q1F9r/redirect
```

## 🚀 Deployment

The application is ready for deployment on platforms like:
- **Heroku**
- **Vercel**
- **Railway**
- **DigitalOcean**
- **AWS**

Make sure to:
1. Set up environment variables for production
2. Configure your database (if using persistent storage)
3. Update CORS settings for your domain

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you find any bugs or have feature requests, please create an issue on [GitHub Issues](https://github.com/hilalahmad0101/urlshortner-nestjs/issues).

## 👨‍💻 Author

**Hilal Ahmad**
- GitHub: [@hilalahmad0101](https://github.com/hilalahmad0101)
- LinkedIn: [Connect with me](https://linkedin.com/in/hilalahmad0101)

## 🙏 Acknowledgments

- NestJS team for the amazing framework
- Contributors and the open-source community

---

⭐ Don't forget to star this repository if you found it helpful!