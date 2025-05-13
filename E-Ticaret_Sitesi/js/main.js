// "Yukarı Çık" Butonu

  // Butonu seç
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Sayfa kaydırıldığında butonu göster/gizle
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) { // 300px aşağı inince butonu göster
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // Butona tıklanınca yukarı kaydır
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Yumuşak kaydırma
    });
  });







// "Tema Değiştir" Butonu

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggleSwitch');
    const body = document.body;
  
    function applyTheme(theme) {
      if (theme === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        toggle.checked = true;
      } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        toggle.checked = false;
      }
    }
  
    // İlk açılışta tema kontrolü
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
  
    // Tıklanınca tema değiştir
    toggle.addEventListener('change', () => {
      const newTheme = toggle.checked ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  });
  




//   Sepete Ekle Butonu


document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cartCount');
    const popupCount = document.getElementById('popupCount');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
  
    let count = parseInt(localStorage.getItem('cartCount')) || 0;
  
    function updateDisplay() {
      cartCount.textContent = count;
      popupCount.textContent = count;
      localStorage.setItem('cartCount', count);
    }
  
    updateDisplay();
  
    // Popup içindeki + butonu
    increaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      count++;
      updateDisplay();
    });
  
    // Popup içindeki - butonu
    decreaseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (count > 0) {
        count--;
        updateDisplay();
      }
    });
  
    // Sepete Ekle butonları
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        count++;
        updateDisplay();
      });
    });
  });



// kayıt / giriş


  const kayitForm = document.getElementById('kayit-form');
  const girisForm = document.getElementById('giris-form');
  const toggleButton = document.getElementById('toggleButton');

  let girisAktif = false; // başlangıçta kayıt formu açık

  toggleButton.addEventListener('click', () => {
    if (girisAktif) {
      // Kayıt formunu göster
      kayitForm.style.display = 'block';
      girisForm.style.display = 'none';
      toggleButton.textContent = 'Giriş Yap';
      girisAktif = false;
    } else {
      // Giriş formunu göster
      kayitForm.style.display = 'none';
      girisForm.style.display = 'block';
      toggleButton.textContent = 'Kayıt Ol';
      girisAktif = true;
    }
  });





  // Search
  
  