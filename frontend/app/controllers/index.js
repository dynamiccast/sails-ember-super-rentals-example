import Ember from 'ember';

export default Ember.Controller.extend({

  title: "",
  owner: "",
  city: "",
  type: "",
  image: "",
  bedrroms: "",

  actions: {
    add: function() {
      let rental = this.get("store").createRecord('rental', {
        title: this.get('title'),
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms')
      });

      rental.save()
        .then(() => {
          this.set('title', "");
          this.set('owner', "");
          this.set('city', "");
          this.set('type', "");
          this.set('image', "");
          this.set('bedrooms', "");
        });
    }
  }
});
