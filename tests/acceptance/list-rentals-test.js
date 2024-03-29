import { test } from 'qunit';
import moduleForAcceptance from 'rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', function(assert){
  visit('/');

  andThen(function(){
    assert.equal(currentURL(), '/rentals', 'should automatically redirect to rentals');
  });

});

test('should link into infomation about the company', function(assert){
  visit('/');
  click('a:contains("About")');

  andThen(function(){
    assert.equal(currentURL(), '/about', 'should navigate to about page');
  });
});

test('should link to contact information', function(assert){
  visit('/');
  click('a:contains("Contact")');

  andThen(function(){
    assert.equal(currentURL(), '/contact', 'should navigate to contact page');
  });

});

test('should list available rentals', function(assert){
  visit('/');

  andThen(function(){
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
  });

});

test('should filter the list of rentals by city.', function(assert){
});

test('should show details for available rentals', function(assert){

});
