Screw.Unit(function() {
  with(Screw.Fixtures) {
    describe("Screw.Fixtures", function() {
      it("is defined", function() {
        expect(Screw.Fixtures).to_not(be_undefined);
      });
      
      it("has fixture helper", function() {
        var defined = true;
        try { fixture; }
        catch(e) { defined = false; }
        expect(defined).to(be_true);
      });
      
      describe("loading fixture data", function() {
        var data, tags, div;
        
        it("gets fixture data", function() {
          data = fixture('tag-section');
          div = $(data);
          tags = div.find('.tag');
          expect(div).to(match_selector, "div.tag-section");
          expect(tags.size()).to(equal, 2);
        });
      });
    });
  }
});