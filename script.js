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
      let filter_to = filter_et.toLowerCase();
      location.href = 'smykker.html?type=' + filter_to;

  }


  function filterKlik() {

      filter_et = this.dataset.collection;
      let filter_tre = filter_et.toLowerCase();
      location.href = 'smykker.html?kollektion=' + filter_tre;

  }
