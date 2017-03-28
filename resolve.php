<?php
/*
	 a + b + c         = 38
   d + e + f + g     = 38
 h + i + j + k + l = 38
   m + n + o + p     = 38
	 q + r + s         = 38
*/
class AristotePuzzle {
	protected $min = 1;
	protected $max = 18;
	protected $valeur_pivot = 19;
	protected $sum = 38;
	protected $position;
	public function getPuzzles($position) {
		if (in_array($position, ['a', 'c', 'l', 's', 'q', 'h'])) {
			$this->position = 'a';
		} else if (in_array($position, ['b', 'g', 'p', 'r', 'm', 'd'])) {
			$this->position = 'b';
		} else if (in_array($position, ['e', 'f', 'k', 'o', 'n', 'i'])) {
			$this->position = 'e';
		} else if ($position == 'j') {
			$this->position = 'j';
		}
		$combinaisons = [];
		$contours = [];
		$tripletBordi = $this->getPermutation();
		foreach($tripletBordi as $tripleti) {
			$remain_values = $this->getRemainValues($tripleti);
			$tripletBordj = $this->getComplement($tripleti[2], $remain_values);
			foreach($tripletBordj as $tripletj) {
				$remain_values = $this->getRemainValues(array_merge($tripleti, $tripletj));
				$remainSumThree = $remain_values[0] + $remain_values[1] + $remain_values[2];
				if ($remainSumThree <= $tripleti[1] &&
					$remainSumThree <= $tripletj[1] ) {
					$tripletBordk = $this->getComplement($tripletj[2], $remain_values);
					foreach($tripletBordk as $tripletk) {
						$remain_values = $this->getRemainValues(array_merge($tripleti, $tripletj, $tripletk));
						$remainSumTwo = $remain_values[0] + $remain_values[1];
						$remainSumThree = $remain_values[0] + $remain_values[1] + $remain_values[2];
						if ($remainSumThree <= $tripleti[1] &&
							$remainSumThree <= $tripletj[1] &&
							$remainSumThree <= $tripletk[1] &&
							$remainSumTwo + $tripleti[1] + $tripletk[1] <= $this->sum &&
							$remainSumThree + $tripleti[0] + $tripletk[2] <= $this->sum) {
							$tripletBordl = $this->getComplement($tripletk[2], $remain_values);
							foreach($tripletBordl as $tripletl) {
								$remain_values = $this->getRemainValues(array_merge($tripleti, $tripletj, $tripletk, $tripletl));
								$remainSumThree = $remain_values[0] + $remain_values[1] + $remain_values[2];
								if ($remainSumThree <= $tripletj[1] &&
									$remainSumThree <= $tripletk[1] &&
									$remainSumThree <= $tripletl[1] &&
									$remainSumThree + $tripleti[0] + $tripletk[2] <= $this->sum &&
									$remainSumThree + $tripleti[2] + $tripletl[2] <= $this->sum ) {
									$tripletBordm = $this->getComplement($tripletl[2], $remain_values);
									foreach($tripletBordm as $tripletm) {
										$remain_values = $this->getRemainValues(array_merge($tripleti, $tripletj, $tripletk, $tripletl, $tripletm));
										$remainSumTwo = $remain_values[0] + $remain_values[1];
										$remainSumThree = $remain_values[0] + $remain_values[1] + $remain_values[2];
										if ($remainSumThree <= $tripleti[1] &&
											$remainSumThree <= $tripletj[1] &&
											$remainSumThree <= $tripletl[1] &&
											$remainSumThree <= $tripletm[1] &&
											$remainSumThree + $tripleti[0] + $tripletk[2] <= $this->sum &&
											$remainSumThree + $tripleti[2] + $tripletl[2] <= $this->sum &&
											$remainSumTwo + $tripletm[1] + $tripleti[1] <= $this->sum &&
											$remainSumThree + $tripletm[2] + $tripletj[2] <= $this->sum ) {
											$A = $tripleti[0] + $tripleti[2] + $tripletj[2] + $tripletk[2] + $tripletl[2] + $tripletm[2];
											$D = 2 * $this->sum - $A;
											$C = 2 * $A - 114;
											$tripletn[0] = $tripletm[2];
											$tripletn[1] = ( 228 - 2 * $A ) - ( $tripleti[1] + $tripletj[1] + $tripletk[1] + $tripletl[1] + $tripletm[1]);
											if ($this->min <= $D &&
												$D <= 8 &&
												$tripletn[1] <= $this->max &&
												!in_array($tripletn[1], $tripleti) &&
												!in_array($tripletn[1], $tripletj) &&
												!in_array($tripletn[1], $tripletk) &&
												!in_array($tripletn[1], $tripletl) &&
												!in_array($tripletn[1], $tripletm)) {
												$remain_values = $this->getRemainValues(array_merge([$D], $tripleti, $tripletj, $tripletk, $tripletl, $tripletm, $tripletn));
												$remainSumTwo = $remain_values[0] + $remain_values[1];
												$remainSumSix = $remain_values[0] + $remain_values[1] + $remain_values[2] + $remain_values[3] + $remain_values[4] + $remain_values[5];
												if ($remainSumTwo + $D <= $tripletn[1] &&
													$remainSumSix == $C  &&
													$D + $remainSumTwo + $tripletm[2] + $tripletj[2] <= $this->sum  ) {
													$combinaison = new stdClass();
													$combinaison->a = $tripleti[0];
													$combinaison->b = $tripleti[1];
													$combinaison->c = $tripleti[2];
													$combinaison->g = $tripletj[1];
													$combinaison->l = $tripletj[2];
													$combinaison->p = $tripletk[1];
													$combinaison->s = $tripletk[2];
													$combinaison->r = $tripletl[1];
													$combinaison->q = $tripletl[2];
													$combinaison->m = $tripletm[1];
													$combinaison->h = $tripletm[2];
													$combinaison->d = $tripletn[1];
													$combinaison->j = $D;
													$contours[] = [$combinaison, $remain_values];
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		foreach($contours as $contour) {
			$combinaison = $contour[0];
			$remain_values = $contour[1];
			//c + f + j + n + q = 38
			$sumC = ($this->sum - $combinaison->c - $combinaison->q - $combinaison->j);
			$doubletDiagonaleC = $this->getPermutationDiagonale($sumC, $remain_values);
			//a + e + j + o + s = 38
			$sumA = ($this->sum - $combinaison->a - $combinaison->s - $combinaison->j);
			$doubletDiagonaleA = $this->getPermutationDiagonale($sumA, $remain_values);
			if (count($doubletDiagonaleC) > 0 &&
				count($doubletDiagonaleA) > 0) {
				foreach($doubletDiagonaleA as $doubletDiagonaleA_i) {
					//a + e + j + o + s = 38
					$combinaison->e = $doubletDiagonaleA_i[0];
					$combinaison->o = $doubletDiagonaleA_i[1];
					foreach($doubletDiagonaleC as $doubletDiagonaleC_j) {
						//c + f + j + n + q = 38
						$combinaison->f = $doubletDiagonaleC_j[0];
						$combinaison->n = $doubletDiagonaleC_j[1];
						if ($combinaison->d + $combinaison->e + $combinaison->f + $combinaison->g == $this->sum) {
							$combinaison->i = $this->sum - $combinaison->d - $combinaison->n - $combinaison->r;
							$combinaison->k = $this->sum - $combinaison->b - $combinaison->f - $combinaison->p;
							if (in_array($combinaison->i, $remain_values) &&
								in_array($combinaison->k, $remain_values)) {
								$combinaisons[] = clone($combinaison);
							}
						}
					}
				}
			}
		}
		return $combinaisons;
	}
	protected function getPermutationDiagonale($sum, $remain_values) {
		$doubletDiagonale = [];
		foreach($remain_values as $i) {
			$j = $sum - $i;
			if (in_array($j, $remain_values) &&
				$i != $j) {
				$doubletDiagonale[] = [$i, $j];
			}
		}
		return $doubletDiagonale;
	}
	protected function getComplement($corner, $remain_values) {
		$tripletBord = [];
		$count = count($remain_values);
		if ($remain_values[$count-1] + $remain_values[$count-2] + $corner >= $this->sum) {
			foreach($remain_values as $i) {
				$j = $this->sum - $corner - $i;
				if (in_array($j, $remain_values) &&
					$i < $j) {
					$tripletBord[] = [$corner, $i, $j];
					$tripletBord[] = [$corner, $j, $i];
				}
			}
		}
		return $tripletBord;
	}
	protected function getRemainValues($keys){
		$values = [];
		foreach($keys as $key) {
			$values[$key] = true;
		}
		$remain_values = [];
		foreach(range($this->min, $this->max) as $item) {
			if (!isset($values[$item])) {
				$remain_values[] = $item;
			}
		}
		return $remain_values;
	}
	protected function getPermutation() {
		$tripletBord = [];
		if ($this->position == 'a') {
			$tripletBord = [];
			$tab1s = range($this->min, $this->max);
			$i = $this->valeur_pivot;
			foreach($tab1s as $j) {
				$tripletBord[] = [$i, $j, $this->sum - $i - $j];
			}
		} else if ($this->position == 'b') {
			$tripletBord = [];
			$tab1s = range($this->min, $this->max);
			$j = $this->valeur_pivot;
			foreach($tab1s as $i) {
				$k = $this->sum - $i - $j;
				if ($i < $k) {
					$tripletBord[] = [$i, $j, $k];
				}
			}
		} else if ($this->position == 'e') {
			$tripletBord = [];
			$tab1s = range($this->min, $this->max);
			foreach($tab1s as $key1 => $i) {
				$tab2s = $tab1s;
				unset($tab2s[$key1]);
				sort($tab2s);
				$tripletBord = array_merge($tripletBord, $this->getComplement($i, $tab2s));
			}
		} else if ($this->position == 'j') {
		}
		return $tripletBord;
	}
}
$timestamp_debut = microtime(true);
$puzzle = new AristotePuzzle();
$combinaisons = $puzzle->getPuzzles($_REQUEST['position']);
$timestamp_fin = microtime(true);
$difference_ms = $timestamp_fin - $timestamp_debut;
header('Content-Type: application/json');
echo json_encode(['ms' => $difference_ms, 'count' => count($combinaisons), 'combinaisons' => $combinaisons]);
