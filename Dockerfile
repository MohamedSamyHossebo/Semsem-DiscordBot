FROM node:18

# تثبيت Python
RUN apt-get update && apt-get install -y python3

# إعداد الفولدر
WORKDIR /app

# نسخ ملفات البوت
COPY . .

# تثبيت الباكدجات
RUN npm install

# تشغيل البوت
CMD ["node", "index.js"]
