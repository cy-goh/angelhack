 $('#payDialog').dialog({
  autoOpen: false,
  buttons: [
  { 
    text: 'Cloud', 
    click: function() { 
      console.log("cloud")
      $(this).dialog('close');
      $('#hireDialog')
        .text('Do you would want to hire Cloud full-time as a Front-End Engineer?');
      $('#hireDialog').dialog('open');
    }
  },
  {
    text: 'Barret',
    click: function() {
      console.log("Barret");
      $(this).dialog('close');
      $('#hireDialog')
        .text('Do you would want to hire Barret full-time as a Front-End Engineer?');          
      $('#hireDialog').dialog('open');
    }
  }]
});

$('#hireDialog').dialog({
  autoOpen: false,
  dialogClass: 'no-close',
  buttons: [
  { 
    text: "Yes", 
    click: function() { 
       console.log("yes")
       $(this).dialog('close');
    }
  },
  {
    text: "No",
    click: function() {
      console.log("no")
      $(this).dialog('close');
    }
  }]
});    