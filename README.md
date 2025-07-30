
# 🚗 CarHub - Arabic Car Showcase

**CarHub** is an open-source project inspired by the [JavaScript Mastery Car Showcase Tutorial](https://www.youtube.com/@javascriptmastery), adapted for Arabic-speaking developers.  
It is built using **Next.js**, **Tailwind CSS**, and the **Imagin Studio API** for car image rendering.

---

## 📌 What is CarHub?

CarHub is a dynamic and responsive web app for browsing and filtering cars based on make, fuel type, drive type, and year.  
This project recreates the tutorial experience but in Arabic, with enhancements for local usage and presentation.

---

## 💻 Live Preview

You can view the live version of the project [here](https://carhub-yx.netlify.app/).

---

## 🔧 Adjustments from the Original Tutorial

While following the tutorial, I encountered a major issue with the car data API:  
[Cars API by API Ninjas](https://api-ninjas.com/api/cars)  
This API no longer provides the same structure or free access as shown in the tutorial.

### ✅ My Solution:

- I used **ChatGPT** to generate real car data with attributes such as:
  - Make and model in both Arabic and English
  - Number of cylinders
  - Fuel type
  - Drive type
  - Transmission
  - Year
  - Estimated rental price (in DZD)

- This data was stored in a local `JSON` file and is fetched directly in the project using local API methods.

---

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Imagin Studio API](https://www.imagin.studio/)
- Local JSON data source

---

## 📂 Project Structure

```bash
/carhub
├── public/
│   └── images/
├── data/
│   └── cars.json        # ✅ Manually generated car data
├── app/
│   ├── page.tsx
│   └── ...
├── components/
│   └── ...
├── README.md
└── ...
```

---

## 📦 Getting Started

```bash
git clone https://github.com/Bad-YX/carhub.git
cd carhub
npm install
npm run dev
```

---

## 💡 Notes

- You can easily expand or modify car data by editing `cars.json`.
- The UI is fully in Arabic, but easily adaptable to English.

---

## 🤝 Contributions

Contributions are welcome! Feel free to submit a Pull Request or open an Issue to suggest improvements or add new car entries.

---

## 📝 License

CarHub is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

**Built with ❤️ for the Arabic developer community.**
