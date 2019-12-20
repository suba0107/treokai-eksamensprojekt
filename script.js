  document.addEventListener("DOMContentLoaded", start);

  function start() {
      klikFilter();

  }

  let filter_et;

  function klikFilter() {
      document.querySelectorAll(".filter-kollektion").forEach(elm => {
          elm.addEventListener("click", filterKlik);
      })
      document.querySelectorAll(".filter-type").forEach(elm => {
          elm.addEventListener("click", filterKlikType);
      })
  }


  function filterKlikType() {

      filter_et = this.dataset.type;
      location.href = 'smykker.html?type=' + filter_et;

  }


  function filterKlik() {

      filter_et = this.dataset.collection;

      location.href = 'smykker.html?kollektion=' + filter_et;

  }
