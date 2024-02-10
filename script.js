  // Wait for the DOM to be fully loaded
           document.addEventListener("DOMContentLoaded", function () {
            // Get references to tab items and tab contents
            const tabItems = document.getElementById("tabItems").querySelectorAll(".product-tab-item");
            const tabContents = document.getElementById("tabContents").querySelectorAll(".product-tab-content");

            // Add click event listeners to each tab item
            tabItems.forEach((item, index) => {
                item.addEventListener("click", function () {
                    // Remove 'active' class from all tab items and contents
                    tabItems.forEach(tabItem => tabItem.classList.remove("active"));
                    tabContents.forEach(tabContent => tabContent.classList.remove("show"));

                    // Add 'active' class to the clicked tab item and show the corresponding content
                    this.classList.add("active");
                    tabContents[index].classList.add("show");
                });
            });
        });
