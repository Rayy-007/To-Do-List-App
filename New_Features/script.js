const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector("#toggler");

// Color theme
const themeTogglerColor = document.querySelector("#color");

themeTogglerColor.addEventListener("click", () => {
  document.body.classList.toggle("blue-theme-variable");

  themeTogglerColor.querySelector("span:nth-child(1)").classList.toggle("set");
  themeTogglerColor
    .querySelector("span:nth-child(2)")
    .classList.toggle("set-1");
});

// * show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// ! close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// ? change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `<tr>
                            <td>${order.productName}</td>
                            <td>${order.productNumber}</td>
                            <td>${order.paymentStatus}</td>
                            <td class="${
                              order.shipping === "Declined"
                                ? "danger"
                                : order.shipping === "Pending"
                                ? "warning"
                                : "primary"
                            }">${order.shipping}</td>
                            <td class="text">Detail</td>
                        </tr> `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
