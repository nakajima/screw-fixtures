(function($) {
  
  Screw.Fixtures = {
    relativePath: './fixtures/',
    
    fixture: function(name) {
      var data = $.ajax({
        url: Screw.Fixtures.relativePath + name + '.html',
        method: 'get',
        dataType: 'html'
      }).responseText;
      
      console.info(data);
      
      return data;
    }
  }
  
})(jQuery)