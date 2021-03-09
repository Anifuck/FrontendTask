$(document).on('click','.submit-button', function(){
if (filesValidation($('.file'))) {
    return true;
}
else
{
    alert("Должно быть 2 или более картинок")
    return false;
}
});

$(document).on('click','.delete-file-input-button', function(){
    let closestDiv = $(this).closest('div');
    closestDiv.remove();
});

$(document).on('click','.add-file-input-button', function(){
    let closestDiv = $(this).closest('div');
    $('.file-inputs').append('<br><div><input type="file" class="file" accept="image/*">'+
    '<button type="button" class="add-file-input-button">+</button>'+
    '<button type="button" class="delete-file-input-button">-</button></div>');
});



$(document).on('click',".drop-me-button", function(){
    let closestDiv = $(this).closest('div');
    $(this).remove();
    closestDiv.append('<button class="drop-me-button" type="button">Самоуничтожение</button>');
    closestDiv.append('<button class="drop-me-button" type="button">Самоуничтожение</button>');
    });

$(".phone-number-input").blur(function() {
    if (!phoneNumberValidation($(this).val()))
    {
        alert("Номер телефона введен некорректно");
        $(this).val("");
    }
  });  

  function phoneNumberValidation(number) {
    var regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
       
    if (number.match(regex)) 
    {
        return true;
    }
    else 
    {
        return false;
    }
  }

  function filesValidation(array)
  {
      var filesCount=0;
      array.each(function(i) {
          if (array[i].files.length>0) filesCount++;
      });
      if (filesCount>=2){
        return true
      } 
      else {
         return false
      }
  }