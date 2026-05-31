// WCTE VX 2027 - Tour Dates Data & Filtering

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
      el.className = `group relative flex flex-col md:flex-row md:items-center gap-x-6 gap-y-4 px-6 py-6 rounded-3xl border border-[#C9A66B]/40 bg-gradient-to-br from-[#C9A66B]/10 via-zinc-950 to-zinc-950 shadow-inner transition-all duration-300 hover:border-[#C9A66B]/70 hover:shadow-[0_0_0_1px_rgba(201,166,107,0.2)] nationals-row`;
      el.innerHTML = `
        <div class="md:w-48 shrink-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[10px] uppercase tracking-[3px] text-[#C9A66B] font-medium">NATIONALS 2027</span>
          </div>
          <div class="font-semibold text-3xl md:text-4xl tracking-[-2px] text-white tabular-nums leading-none group-hover:text-[#C9A66B] transition-colors">
            ${event.dates}
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-3">
            <div class="font-semibold text-2xl tracking-tight">${event.city}</div>
          </div>
          <div class="text-sm text-[#C9A66B]/80 mt-1">The Iconic Celebration • Season Finale</div>
        </div>

        <div class="shrink-0">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#C9A66B] text-black text-sm font-semibold tracking-wider shadow-sm">
            <span>★</span>
            <span>ATTEND</span>
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
        <div class="md:w-44 shrink-0">
          <div class="font-semibold text-[22px] md:text-3xl tracking-[-1.5px] text-white tabular-nums leading-none group-hover:text-[#C9A66B] transition-colors duration-200">
            ${event.dates}
          </div>
          <div class="text-[10px] uppercase tracking-[2.5px] text-zinc-500 mt-1">2027</div>
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

  // Form handling (demo only for now)
  const form = document.getElementById("interest-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;
    
    button.disabled = true;
    button.textContent = "Submitting...";

    setTimeout(() => {
      form.innerHTML = `
        <div class="text-center py-8">
          <div class="mx-auto w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mb-5">
            <span class="text-3xl">🎉</span>
          </div>
          <div class="text-2xl font-semibold tracking-tight mb-2">Thank you!</div>
          <p class="text-zinc-400 max-w-xs mx-auto">
            You're on the list. We'll be in touch soon with exclusive 2027 updates.
          </p>
        </div>
      `;
    }, 800);
  });

  console.log('%c[WCTE VX 2027] Tour dates filter initialized', 'color:#C9A66B');
}

// Boot it up
init();
