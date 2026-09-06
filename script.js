// ===================================================================
// Residence du Cap — Resident Portal (redesign concept)
// Plain vanilla JS, no build step, no external dependencies.
// State is kept in memory only — this is a visual/UX demo, not a
// connected backend. Wire the form submit handlers up to your real
// work-order / valet system when adopting this design.
// ===================================================================

(function () {
  "use strict";

  var overlay = document.getElementById("modalOverlay");
  var body = document.body;

  /* ---------- Today's date ---------- */
  var dateEl = document.getElementById("todayDate");
  if (dateEl) {
    var today = new Date();
    dateEl.textContent = today.toLocaleDateString(undefined, {
      weekday: "long", month: "long", day: "numeric"
    });
  }

  /* ---------- Modal open/close ---------- */
  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    overlay.classList.add("open");
    document.querySelectorAll(".modal.open").forEach(function (m) {
      m.classList.remove("open");
    });
    modal.classList.add("open");
    var firstField = modal.querySelector("input, select, textarea, button.btn");
    if (firstField) {
      window.setTimeout(function () { firstField.focus(); }, 10);
    }
  }

  function closeAllModals() {
    overlay.classList.remove("open");
    document.querySelectorAll(".modal.open").forEach(function (m) {
      m.classList.remove("open");
    });
  }

  document.querySelectorAll("[data-modal]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openModal(trigger.getAttribute("data-modal"));
    });
  });

  document.querySelectorAll(".modal-close, .modal-dismiss").forEach(function (btn) {
    btn.addEventListener("click", closeAllModals);
  });

  overlay.addEventListener("click", function (evt) {
    if (evt.target === overlay) closeAllModals();
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") closeAllModals();
  });

  /* ---------- Form submission -> confirmation ---------- */
  document.querySelectorAll(".modal-form").forEach(function (form) {
    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      var message = form.getAttribute("data-confirm") || "Your request has been sent.";
      document.getElementById("confirmMessage").textContent = message;
      openModal("confirmModal");
      form.reset();
    });
  });

  /* ---------- Text size toggle ---------- */
  var fontScales = { normal: 1, large: 1.15, xlarge: 1.35 };
  document.querySelectorAll(".a11y-btn[data-font]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var scale = fontScales[btn.getAttribute("data-font")] || 1;
      document.documentElement.style.setProperty("--font-scale", scale);
      document.querySelectorAll(".a11y-btn[data-font]").forEach(function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
    });
  });

  /* ---------- High contrast toggle ---------- */
  var contrastBtn = document.getElementById("contrastToggle");
  var contrastState = document.getElementById("contrastState");
  contrastBtn.addEventListener("click", function () {
    var isHigh = body.classList.toggle("contrast-high");
    contrastBtn.setAttribute("aria-pressed", isHigh ? "true" : "false");
    contrastState.textContent = isHigh ? "On" : "Off";
  });

})();
