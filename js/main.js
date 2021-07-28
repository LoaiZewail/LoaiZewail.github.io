
        // Menu button
        function toggleMenu(){
            var menuToggle = document.querySelector('.menuforjs');
            menuToggle.checked = false;
        }

        // Dark Mood
        let darkMode = localStorage.getItem("darkMode");

        // Toggle button
        const darkModeButton = document.querySelector("#switch");

        // Enable dark mode
        const enableDarkMode = () => {
            document.body.classList.add("darkmode");
            document.querySelector('#whitebar').style.display="none";
            document.querySelector('#progressbar').style.display="block";
            document.querySelector('.banner').style.filter="grayscale(0%)";
            // Progressbar color
            var progress = document.getElementById("progressbar");
            var totalheight = document.body.scrollHeight - window.innerHeight;
            window.onscroll = function(){
                var progressheight = (window.pageYOffset/totalheight)*100;
                progress.style.width = progressheight+ "%";
            }
            // Set settings of darkmode to enabled
            localStorage.setItem("darkMode", "enabled");
        };

        // Disable dark mode
        const disableDarkMode = () => {
            document.body.classList.remove("darkmode");
            document.querySelector('#whitebar').style.display="block";
            document.querySelector('#progressbar').style.display="none";
            document.querySelector('.banner').style.filter="grayscale(100%)";
            // Progressbar white
            var whiteprogress = document.getElementById("whitebar");
            var totalheight = document.body.scrollHeight - window.innerHeight;
            window.onscroll = function(){
                var progressheight = (window.pageYOffset/totalheight)*100;
                whiteprogress.style.width = progressheight+ "%";
            }
            // Set settings of dark mode to disabled
            localStorage.setItem("darkMode", "null");
        };

        // Update according to the user's previous settings
        if (darkMode === "enabled") {
            enableDarkMode();
            darkModeButton.checked=true;
        }
        else {
            disableDarkMode();
            darkModeButton.checked=false;
        }

        // Event Listener
        darkModeButton.addEventListener("click", () => {
        // Get the settings
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
        });
        

        // Preloader
        const startbrowsing=()=>{
            $(".mainWebsite").fadeIn(5000);
            $("#particles").fadeOut(1500);
            enableDarkMode();
            darkModeButton.checked=true;
        } 
        // Particles background
        document.addEventListener('DOMContentLoaded', function () {
            particleground(document.getElementById('particles'), {
                dotColor: '#fff',
                lineColor: '#a9a9a9',
                density: 9000,
                minSpeedX: 0.4,
                minSpeedY: 0.4,
                maxSpeedX: 0.9,
                maxSpeedY: 0.9,
                lineWidth: 0.7,
                particleRadius: 5
            });
            var intro = document.getElementById('intro');
            intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
        }, false);
