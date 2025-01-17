const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById("hide").innerHTML =
  "Coming Tomorrow, " +
  tomorrow
    .toISOString()
    .split("T")[0]
    .split("-")
    .reverse()
    .map((x, i) =>
      i == 1
        ? [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ][parseInt(x) - 1]
        : x
    )
    .join(" ");

document.addEventListener("DOMContentLoaded", () => {
  const infoBtn = document.getElementById("info-btn");
  const tooltip = document.getElementById("tooltip");

  // Toggle tooltip on button click
  infoBtn.addEventListener("click", () => {
    if (tooltip.style.display === "block") {
      tooltip.style.display = "none";
    } else {
      tooltip.style.display = "block";
    }
  });

  // Hide tooltip when clicking outside
  document.addEventListener("click", (event) => {
    if (event.target !== infoBtn && !tooltip.contains(event.target)) {
      tooltip.style.display = "none";
    }
  });
});
