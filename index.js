(function () {
	Math.gcd = gcd;
	Math.lcm = lcm;
	Math.lcd = lcd;
	
	function gcd(...nums) {
		return nums.reduce(_gcd,1);
	}
	
	function _gcd(a,b) {
		while (b !== 0) {
			[a,b] = [b,a%b];
		}
		return Math.abs(a);
	}
	
	function lcm(...nums) {
		return nums.reduce(_lcm,1);
	}
	
	function _lcm(a,b) {
		if (a*b === 0) return 0;
		return Math.abs(a*b)/_gcd(a,b);
	}
	
	function lcd(...dens) {
		return lcm(...dens);
	}
})()
