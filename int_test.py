thicknessSet = {
	"hww-65a" : 3.49, 
	"hww" : 3.49, 
	"ww" : 3.49, 
	"white woven" : 3.49, 
	"hwhp-80a" : 6.34, 
	"hwhp-82a" : 6.34,
	"hwhp" : 6.34, 
	"hp" : 6.34, 
	"hwlp-80a" : 6.34, 
	"hwlp-82a" : 6.34,
	"hwlp" : 6.34, 
	"lp" : 6.34, 
	"hwhp-100a" : 110, 
	"hwhp-100" : 110, 
	"hwmp-90a" : 4.23, 
	"hwmp" : 4.23, 
	"mp" : 4.23, 
	"hwd2-72a" : 7.21, 
	"hwd2" : 7.21, 
	"d2" : 7.21, 
	"drain" : 7.21, 
	"raindrain" : 7.21, 
	"rain drain" : 7.21, 
	"rain" : 7.21, 
	"hw03lp-a" : 15.2, 
	"hwlp-kc" : 15.2, 
	"hwlp-kcc" : 15.2, 
	"hwlp-kcd" : 15.2, 
	"kc" : 15.2, 
	"kcc" : 15.2, 
	"kcd" : 15.2, 
	"kimberly-clark" : 15.2, 
	"kimberly clark" : 15.2, 
	"kimberly" : 15.2, 
	"ruwflt-140a" : 5.5, 
	"ruwflt" : 5.5, 
	"flt" : 5.5, 
	"feltex" : 5.5, 
	"ruw15-85a" : 5.5,
	"ruw15-85" : 5.5,
	"cp1000" : 5.5,
	"ruw15-96a" : 5.8, 
	"ruw15-96" : 5.8, 
	"cp2000" : 5.8, 
	"ruw15-120a" : 9.3, 
	"ruw15-120" : 9.3, 
	"cp3000" : 9.3,
	"ruwtx-170" : 18.0,
	"ruwtx-180" : 19.0,
	"test" : 100.0,
	"hwhpt-92" : 8.8,
	"hwhpt" : 8.8,
	"hpt" : 8.8,
	"ww1.5" : 3.49,
	"ww2.75" : 3.49
}

coreSet = {
	"hww-65a" : 6, 
	"hww" : 6, 
	"ww" : 6, 
	"white woven" : 6, 
	"hwhp-80a" : 7, 
	"hwhp-82a" : 7,
	"hwhp" : 7, 
	"hp" : 7, 
	"hwlp-80a" : 7, 
	"hwlp-82a" : 7,
	"hwlp" : 7, 
	"lp" : 7, 
	"hwhp-100a" : 7, 
	"hwhp-100" : 7, 
	"hwmp-90a" : 7, 
	"hwmp" : 7, 
	"mp" : 7, 
	"hwd2-72a" : 7, 
	"hwd2" : 7, 
	"d2" : 7, 
	"drain" : 7, 
	"raindrain" : 7, 
	"rain drain" : 7, 
	"rain" : 7, 
	"hw03lp-a" : 7, 
	"hwlp-kc" : 7, 
	"hwlp-kcc" : 7, 
	"hwlp-kcd" : 7, 
	"kc" : 7, 
	"kcc" : 7, 
	"kcd" : 7, 
	"kimberly-clark" : 7, 
	"kimberly clark" : 7, 
	"kimberly" : 7, 
	"ruwflt-140a" : 7, 
	"ruwflt" : 7, 
	"flt" : 7, 
	"feltex" : 7, 
	"ruw15-85a" : 6.6,
	"ruw15-85" : 6.6,
	"cp1000" : 6.6,
	"ruw15-96a" : 6.6, 
	"ruw15-96" : 6.6, 
	"cp2000" : 6.6, 
	"ruw15-120a" : 6.6, 
	"ruw15-120" : 6.6, 
	"cp3000" : 6.6,
	"ruwtx-170" : 6,
	"ruwtx-180" : 6,
	"test" : 6,
	"hwhpt-92" : 7,
	"hwhpt" : 7,
	"hpt" : 7,
	"ww1.5" : 1.5,
	"ww2.75" : 2.75
}

def buttCalculator():
	substrate = raw_input("Material grade: ").lower()
	
	if substrate in thicknessSet:
		width = float(raw_input("Diameter of roll in inches: "))
		thickness = float(thicknessSet[substrate])
		coreSize = float(coreSet[substrate])
		import math
		length = (1000*math.pi)/(48*thickness)*(width**2-coreSize**2)
		print("--> " + "%.2f" % length + " LF")
		print
		buttCalculator()
	else:
		print("Please enter a valid substrate.")
		print
		buttCalculator()
		
buttCalculator()
