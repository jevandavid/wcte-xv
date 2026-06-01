// WCTE XV 2027 - Tour Dates Data & Filtering

const tourDates = [
  // February 2027
  { id: 1, month: "February", city: "Roanoke, VA", dates: "Feb 5–7", status: "confirmed", label: null },
  { id: 2, month: "February", city: "Virginia Beach, VA", dates: "Feb 12–14", status: "confirmed", label: null },
  { id: 3, month: "February", city: "Tampa, FL", dates: "Feb 19–21", status: "confirmed", label: null },
  { id: 4, month: "February", city: "Morristown, NJ", dates: "Feb 19–21", status: "confirmed", label: "NEW" },
  { id: 5, month: "February", city: "Worcester, MA", dates: "Feb 26–28", status: "confirmed", label: null },

  // March 2027
  { id: 6, month: "March", city: "Hartford / Springfield, CT", dates: "Mar 12–14", status: "confirmed", label: null },
  { id: 7, month: "March", city: "Nashua, NH", dates: "Mar 19–21", status: "confirmed", label: null },

  // April 2027
  { id: 8, month: "April", city: "Long Island, NY", dates: "Apr 2–4", status: "tentative", label: "TENTATIVE" },
  { id: 9, month: "April", city: "Manchester, NH", dates: "Apr 9–11", status: "confirmed", label: null },
  { id: 10, month: "April", city: "Woonsocket, RI", dates: "Apr 9–11", status: "confirmed", label: null },
  { id: 11, month: "April", city: "Chicago, IL", dates: "Apr 16–18", status: "confirmed", label: null },
  { id: 12, month: "April", city: "Columbus, OH", dates: "Apr 16–18", status: "confirmed", label: null },
  { id: 13, month: "April", city: "Vernon, CT", dates: "Apr 23–25", status: "confirmed", label: null },
  { id: 14, month: "April", city: "Albany, NY", dates: "Apr 30 – May 2", status: "tentative", label: "TENTATIVE" },
  { id: 15, month: "April", city: "Worcester, MA", dates: "Apr 30 – May 2", status: "confirmed", label: null },

  // Nationals 2027 — The Iconic Celebration
  { id: 16, month: "Nationals", city: "Virginia Beach, VA", dates: "June 28 – July 2", status: "nationals", label: null },
  { id: 17, month: "Nationals", city: "Mystic, CT", dates: "July 12–16", status: "nationals", label: null }
];

let currentFilter = "All";

// Render the dates list
function renderDates(filteredDates) {
  const container = document.getElementById("dates-list");
  container.innerHTML = "";

  if (filteredDates.length === 0) {
    container.innerHTML = `
      <div class="px-6 py-8 text-center text-zinc-400">
        No dates match your search.
      </div>
    `;
    return;
  }

  filteredDates.forEach(event => {
    const isNationals = event.status === "nationals";
    const label = event.label;

    const el = document.createElement("div");

    if (isNationals) {
      // Special rich treatment for Nationals — big highlight
      el.className = `group relative flex flex-col md:flex-row md:items-center gap-x-6 gap-y-4 px-6 py-6 rounded-3xl border border-[#C9A66B]/50 bg-gradient-to-br from-[#C9A66B]/15 via-zinc-950 to-zinc-950 ring-1 ring-inset ring-[#C9A66B]/10 shadow-inner transition-all duration-300 hover:border-[#C9A66B]/70 hover:shadow-[0_0_0_1px_rgba(201,166,107,0.25)] nationals-row`;
      el.innerHTML = `
        <div class="md:w-56 shrink-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[10px] uppercase tracking-[3px] text-[#C9A66B] font-medium">NATIONALS 2027</span>
          </div>
          <div class="text-[9px] text-[#C9A66B]/60 tracking-[1.5px] mb-2">LIMITED TO 15TH ANNIVERSARY</div>
          <div class="font-semibold text-3xl md:text-4xl tracking-[-2px] text-white tabular-nums leading-none group-hover:text-[#C9A66B] transition-colors whitespace-nowrap">
            ${event.dates}
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3">
            <div class="font-semibold text-2xl tracking-tight">${event.city}</div>
          </div>
          <div class="text-sm text-[#C9A66B]/80 mt-1">The only 15th Anniversary Nationals</div>
        </div>

        <div class="shrink-0">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#C9A66B] text-black text-sm font-semibold tracking-wider shadow-sm">
            <span>★</span>
            <span>DON'T MISS</span>
          </div>
        </div>
      `;
    } else {
      // Regular season row — date is the star, rich depth + texture
      el.className = `group relative flex flex-col md:flex-row md:items-center gap-x-6 gap-y-3 pl-5 pr-5 py-5 rounded-3xl border-l-[3px] border-[#C9A66B]/70 border-t border-r border-b border-white/10 bg-zinc-950 hover:border-[#C9A66B]/90 hover:border-white/25 hover:bg-zinc-900 hover:shadow-[0_8px_20px_-4px_rgb(0,0,0,0.3)] transition-all duration-200 active:bg-zinc-800`;

      let labelHTML = "";
      if (label === "NEW") {
        labelHTML = `<span class="inline-block text-[10px] px-2.5 py-px rounded-full bg-emerald-400/20 text-emerald-400 font-medium tracking-wider border border-emerald-400/30">NEW</span>`;
      } else if (label === "TENTATIVE") {
        labelHTML = `<span class="inline-block text-[10px] px-2.5 py-px rounded-full bg-white/10 text-zinc-400 font-medium tracking-wider border border-white/20">TENTATIVE</span>`;
      }

      el.innerHTML = `
        <!-- DATE — the hero element -->
        <div class="md:w-52 shrink-0">
          <div class="font-semibold text-[22px] md:text-3xl tracking-[-1.5px] text-white tabular-nums leading-none group-hover:text-[#C9A66B] transition-colors duration-200 whitespace-nowrap">
            ${event.dates}
          </div>
          <div class="text-[10px] uppercase tracking-[2.5px] text-zinc-500 mt-1 whitespace-nowrap">2027</div>
        </div>

        <!-- City + optional micro label -->
        <div class="flex-1 min-w-0 flex items-center gap-3">
          <div class="font-medium text-xl tracking-tight text-white/95">${event.city}</div>
          ${labelHTML}
        </div>
      `;
    }

    // Make the whole row clickable in future if needed (subtle pointer)
    el.style.cursor = "default";
    container.appendChild(el);
  });
}

// Filter function
function filterDates() {
  const searchTerm = document.getElementById("search-input").value.toLowerCase().trim();

  let filtered = tourDates;

  // Month filter
  if (currentFilter !== "All") {
    filtered = filtered.filter(d => d.month === currentFilter);
  }

  // Search filter
  if (searchTerm) {
    filtered = filtered.filter(d => 
      d.city.toLowerCase().includes(searchTerm) || 
      d.dates.toLowerCase().includes(searchTerm)
    );
  }

  renderDates(filtered);
}

// Create month filter buttons
function createMonthFilters() {
  const container = document.getElementById("month-filters");
  const months = ["All", "February", "March", "April", "Nationals"];

  months.forEach(month => {
    const btn = document.createElement("button");
    btn.textContent = month;
    btn.className = `px-5 py-2 rounded-2xl text-sm font-medium transition-all border ${
      month === "All" 
        ? "bg-white text-black border-white" 
        : "bg-zinc-900 border-white/20 hover:border-white/40"
    }`;

    btn.addEventListener("click", () => {
      currentFilter = month;

      // Update active styles
      document.querySelectorAll("#month-filters button").forEach(b => {
        if (b.textContent === month) {
          b.classList.add("bg-white", "text-black", "border-white");
          b.classList.remove("bg-zinc-900", "border-white/20");
        } else {
          b.classList.remove("bg-white", "text-black", "border-white");
          b.classList.add("bg-zinc-900", "border-white/20");
        }
      });

      filterDates();
    });

    container.appendChild(btn);
  });
}

// Initialize everything
function init() {
  // Render all dates initially
  renderDates(tourDates);

  // Setup month filters
  createMonthFilters();

  // Setup search
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", filterDates);

  // ============================================
  // CONFIGURATION - Replace these values after setup
  // ============================================
  const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx1Lxz2Vue61gOMkjQqDbFsA1oc1Xcm6-kPYaN4WIKQk6jH7CSw1lA1nVvD4TUUdBWa/exec";
  const EMAILJS_PUBLIC_KEY = "gLlv1ombHvG9bjmcV";
  const EMAILJS_SERVICE_ID = "service_dw0woxo";
  const EMAILJS_TEMPLATE_ID = "template_kabu817";

  // Initialize EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  // Real form submission handler
  const form = document.getElementById("interest-form");
  form.addEventListener("submit", async function(e) {
    // Safety check - prevent submission if config is not set yet
    if (GOOGLE_APPS_SCRIPT_URL.includes("YOUR_GOOGLE_APPS_SCRIPT")) {
      e.preventDefault();
      alert("The form is not connected yet. Please finish the Google Apps Script setup first (see GOOGLE_APPS_SCRIPT.md).");
      return;
    }
    e.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;

    button.disabled = true;
    button.textContent = "Submitting...";

    // Collect form data
    const formData = new FormData(form);
    const data = {
      studio: formData.get("studio"),
      name: formData.get("name"),
      role: formData.get("role"),
      email: formData.get("email"),
      city_interest: formData.get("city_interest"),
      routines: formData.get("routines"),
      timestamp: new Date().toISOString()
    };

    try {
      // 1. Send to Google Sheets via Apps Script
      // Using mode: 'no-cors' because Google Apps Script Web Apps have unreliable CORS support.
      // We treat any completed fetch (no network error) as success.
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      // If we reach here without a network error, assume the submission succeeded.

      // 2. Send thank-you email via EmailJS (fire and forget)
      if (typeof emailjs !== "undefined" && EMAILJS_TEMPLATE_ID !== "YOUR_EMAILJS_TEMPLATE_ID_HERE") {
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
          to_email: data.email,
          to_name: data.name,
          studio_name: data.studio,
          role: data.role,
          city_interest: data.city_interest,
          routines: data.routines
        }).catch(err => {
          console.warn("EmailJS send failed (non-blocking):", err);
        });
      }

      // 3. Show success state
      form.innerHTML = `
        <div class="text-center py-10">
          <div class="mx-auto w-16 h-16 rounded-full bg-[#C9A66B]/20 flex items-center justify-center mb-6">
            <span class="text-4xl">🎉</span>
          </div>
          <div class="text-3xl font-semibold tracking-tight mb-3">You're on the list!</div>
          <p class="text-zinc-400 max-w-sm mx-auto mb-6">
            Thank you. A confirmation email is on its way, and we'll keep you updated on WCTE XV 2027.
          </p>
          <p class="text-sm text-[#C9A66B]">Early Bird registration opens August 1st, 2026.</p>
        </div>
      `;

    } catch (error) {
      console.error("Submission error:", error);
      
      // Show error state
      button.disabled = false;
      button.textContent = originalText;

      const errorDiv = document.createElement("div");
      errorDiv.className = "mt-4 p-4 bg-red-900/30 border border-red-500/40 rounded-2xl text-sm text-red-400 text-center";
      errorDiv.textContent = "Something went wrong. Please try again or email us directly.";
      
      // Remove any previous error
      const oldError = form.querySelector(".bg-red-900\\/30");
      if (oldError) oldError.remove();
      
      form.appendChild(errorDiv);
    }
  });

  console.log('%c[WCTE XV 2027] Tour dates filter initialized', 'color:#C9A66B');
}

// Boot it up
init();
