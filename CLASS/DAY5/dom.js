//today session DOM
// **DOM (Document Object Model)** is a **programming interface** that represents the **HTML structure** of a webpage as a **tree of objects**.

// 👉 It allows JavaScript to **interact with, manipulate, and change the structure, style, and content** of a webpage dynamically


//in html
//<h1 id="title">Hello World</h1>

//but in js
//document.getElementById("title").textContent = "Welcome to DOM!";

//## 📜 **3. Accessing DOM Elements**

//We can **select elements** in multiple ways:

/*
### a) **By ID**

```jsx
const title = document.getElementById("title");

```

### b) **By Class**

```jsx
const items = document.getElementsByClassName("list-item");

```
### c) **By Tag Name**

```jsx
const paras = document.getElementsByTagName("p");

```
### d) **Using Query Selectors (Modern & Preferred)**

```jsx
const heading = document.querySelector("h1"); // first match
const allParas = document.querySelectorAll("p"); // all matches

```

## **4. Manipulating Content**

Once selected, you can **read or modify content**:

### 🔹 **textContent**

```jsx
document.getElementById("title").textContent = "DOM Updated!";

```
### **intertext**

```jsx
element.innerText = "Visible text only";
```
### **innerHTML**

```jsx
document.querySelector("#container").innerHTML = "<h2>New HTML added</h2>";

```

*/