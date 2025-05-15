function selectFaction(name) {
    document.getElementById("faction-select").style.display = "none";
    document.getElementById("meme-battle").style.display = "block";
    document.getElementById("faction-title").innerText = `Caption This Meme for ${name}`;
  }
  
  function submitCaption() {
    const caption = document.getElementById("caption").value;
    if (caption.trim() === "") {
      alert("Please enter a caption!");
      return;
    }
  
    document.getElementById("submitted-message").style.display = "block";
  }