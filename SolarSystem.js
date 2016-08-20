

var SolarSystem = (function(){
	var planets = [""];
	var activeSpacecraft = [""];
	var planetsLandedOn = 0;
	return {
		lastModifiedDate: new Date(),
		getPlanet: function(){
			return planets;
		},
		setPlanet: function(planet){
			planets.push(planet);
		},
		getActiveSpacecraft: function(){
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(spacecraft){
			activeSpacecraft.push(spacecraft);
		},
		getPlanetLandedOn: function(){
			return planetsLandedOn;
		},
		setPlanetLandedOn: function(newStatus){
			planetsLandedOn = newStatus;
		}
	}
})();