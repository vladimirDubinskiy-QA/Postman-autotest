// autotest for method https://swapi.dev/api/planets/7

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Content-Type header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Endor");
});