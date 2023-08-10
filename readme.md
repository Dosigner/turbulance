# 중동의 육상에서의 대기 광학난류: 예측모델링 및 측정

## 1. Introduction

광학 난류는 electro-optic sensing system의 다양한 종류에 영향을 준다.
지상-지상, 지상-대기 optical과 전자기적인 wave propagation이 상당한 노력들이 이루어졌다.

electro-optic system들에 강하게 영향을 주는 또다른 다른 대기 현상은 aerosol에 인한 radiation scatter(방사선 흩어짐)이다.
optical beam의 대기 전파 모델링의 경우, 실험적, semi-실험적 모델을 open ocean과 continental aerosol condition에 맞추어 개발했다. 
하지만, 이것들은 coastal environment에서 효과를 나타내기에 불충분하고, 이 region에 특별히 맞춰 처리하지 않았기 때문.
구름과 coastal aerosols (즉, 대륙과 파도에 의해 발생된)들은 airborne forward-looing infrared(항공기, 비행체 적외선 영상 획득)와 적외선 search and track 시스템이 coastal zone에서 작동하는데 큰 영향을 줌 )

turbulent atmosphere가 wave beam의 intensity의 fluctuate와 반짝이는 별을 cause하고
-> beam wander(다른 곳을 가는것)를 cause하고
-> image의 random 변위와 distortion을 cause

atomospheric turbulence의 광학적 효과는 주로 $C_n^2$ `refractive-index structure` 변수에 영향을 받는다.
- 대기의 광학적 불균일성을 측정하는 매개변수
- 대기의 온도, 압력, 습도가 변화를 일으키고, 광선의 굴절률에 영향을 미치고, 특정 경로에서 굴절률의 내외부 차이가 광선 자체의 굴절을 발생시킬 수 있음

대기 광학과 기상학 사이 interaction은 실험적, 이론적 연구의 주제
turbulence의 경우 micrometoeorology(미시 기상학)의 하나로 간주되는데, local gradient들과 wind shear(수평 방향의 풍속 변화(rate)) 특정 지점 측정을 포함한다.
하지만, 긴 line-of-sight의 경우, 미시 기상학 data를 직접 얻기 힘들고, 표준 기상 예보를 이용하기 힘들다.
이러한 어려움은 macroscale weather의 parameter들인 공기 온도, 바람 속도 방향, 상대 습도를 이용하여 극복할 수 있다. 모두 거리에 따라 크게 달라지지 않으며 훨씬 더 쉽게 이용 가능

**여기 marine과 land 경계 layer 위의 대기 지표에서 유효한 2가지 모델에 기반하여  다양한 coastal zone에서 땅위 optical turbulence의 이론적 분석에 대해서 discuss**
`macrometeorogical parameter`들의 효과와 `refractive-index`의 variation들의 특징을 조사하기 위해 Israel의 남쪽과 북쪽에서 실험 수행. 해안 optical atmospheric link에 따라
`refractive-index structure parameter` variation의 예측 모델은  `온도 gradient`, `상대 습도 값`, `풍속 gradient`를 통합한 지구물리학적 data 기반이다.

Thiermann-Kohnle model은 Monin-Obuhkov similrity 이론에 기반
- MOS 이론은 열의 turbulent fluxes와 momentum과 확장되었다.

**Thiermann-Kohnle model**
- 지상 대기 표면에서 유효.
- model에 요구되는 input들은 표준 기상학 parameter : `기온`, `풍속`, `기압`.
- 다른 input으로는 일사량(`solar irradiance`), 지형 태양광선 반사 비율(`terrain albedo`), 지표면 거칠기(`roughness length`, 숲>사막>바다), 지면 습도(`ground humidity`)

이 model과 다르게 **macroscale model**들에 의해 `turbulence refractive-index parameter`들은 긴 계산 없이 예측이 가능한데, **`기온`, `풍속`, `상대습도` 에 의해 가능**

또한 이전 model과 다르게, 이 모델은 `temporal hours or 하루의 상대적 부분`의 concept에 기반

우리는 실험적 data의 비교로 나타낸 바로 2개의 다른 practical variation(실질적 변동성)인 있는 extension 모델을 발표하고,  `refractive-index structure parameter` variation의 좋은 predictor인 것을 보인다. 낮, 밤시간 중동 해안 지역의 요동치는 대기를 위한

**이 실험에서 수신되는 optical signal의 angle-of-arrival fluctuation의 평균(도달하는 입사각의 변화)에 의해 $C_n^2$ 가 계산된다.**


#### 1.1 방사선이 원자나 분자와 상호 작용하여 다른 방향으로 흩어지는 현상
1. Rayleigh Scattering
	**`파장 >>>> 물체의 크기 or 파장 <<<<<< 원자의 크기`**
	light나 wave가 물체의 원자나 분자와 상호작용하여 흩어지는 현상
	1. 태양은 백색광인데 가시광선의 파장이 짧은 blue와 violet wave가 산란이 강하게 발생
	2. 빛이 강하게 흩어져 하늘이 푸르게 보임
	3. 해질녘에서는 지평선 근처에 있을 때 노란과 주항색 빛이 더욱 강하게 흩어져 하늘이 붉게 
	4. 빨강과 근적외선은 영향을 적게
	5. 가을과 여름에 태양이 높게 있기 때문에 하늘이 더 청명하고 푸름.
	
	$Is​=I_0​×(1+cos^2(θ))/(2×R^2)​$
	- $Is$​는 산란된 빛의 강도 (산란된 빛의 밝기),
	- $I_0$​는 원래 빛의 강도 (입사한 빛의 밝기),
	- $θ$는 빛의 입사 각도와 산란 방향과의 각도(0도), 구하기 힘듬. 대기의 불규칙한 밀도 변화 통계적 모델링
	- $R$은 물체와 관찰 지점 사이의 거리


2. Releigh Scattering
	**`파장 >>> 물체의 크기 and 파장 > Rayleigh Scattering`**
	주로 대기의 가스 분자와 빛이 상호 작용할 때, 하늘이 햇빛에 의해 밝게 빛나는 현상
	주로 파장이 긴 빛(빨강, 주황색)에 대해 발생
	$Is​=I_0​×((R−1​)/(R+2))^2$
	-  $I_s$​는 산란된 빛의 강도 (산란된 빛의 밝기),
	- $I_0$​는 원래 빛의 강도 (입사한 빛의 밝기),
	- R은 레일리 산란 매개변수로, 대기의 굴절률과 관련된 상수입니다.
	- $R = (n-1)/(n+1)$ , n은 대기조건에 따라 변하며 일반적으로 n=1.0003, R=0.00015
	
	대기 굴절률 공식
	- $P$는 대기의 기압(hPa)
	- $T$는 대기의 온도(℃)
	- $e$는 대기의 상대 습도( 0~1 )
	![[Pasted image 20230804094235.png]]

#### 1) Negev experimental area - 3.76km
2003 10월 3주동안 
wind direction 90~100º
Eliat Gulf의 해얀 지역은 Negev와 Eliat 산 사이에 위치
![[Pasted image 20230804131756.png]]

#### 2) Golan experimental area - 2.47km
Tiberaias Lake(Sea of Galilee)의 해안 지역에 위치 Golan Heights와 Galilee 산들 사이에
물에서 육지 방향으로 불어옴


____
## 2. Modeling of Atmospheric Optical Turbulence  

### 2.1 Macroscale Meteorological Models
MOS Theory의 모델과 달리, 
거시 기상학 모델에 의한 turbulence 값 예측은 방출 값, heat flux 없이 도출된다.
이 model은 temporal hours 와 day의 일정부분에 기반으로 둔 model이다.
$C_n^2 = 10^{-15} *$
$(3.8*10*W + 2*T -2.5*U+1.2*U^2-8.5*10^{-2}*U^3  -2.8*RH+2.9*10^{-2}*RH^2-1.1*10^{-4}*RH^3-5.3*10^2)$
- $W$ : temporal hour weight
- $T$ : temperature (kelvin)
- $U$ : wind speed (m/s)
- $RH$ : relative humidity (%)

Equation들의 각 회귀 계수는 1990년에 측정한 측정값을 이용한 것이다.
- 1항은 sunrise와 sunset 사이에 시간대에 따른 solar radiation에 대한 정보를 포함하고 있는 `temporal hour weight function`이다.
- 2항은 temperature에 관한 계수이며
	- 무조건 양수이다. 더 높은 온도는 너 큰 온도 기울기를 만들고 따라서 더 강한 난동을 만든다.
- 3항은 wind speed 계수를 특징한다. 
	- 바람이 공기와 혼합을 유발하고 그러므로 습도와 온도의 inhomogenity(불균등성)을 감소한다.
	- 바람이 증가하면, 지면의 열의 소실되게 하고, $T gradient$(지상 4m T - 지상 0.5m T) 감소한다.  또한 $C_n^2$를 감소 시킴
- 4항은 relative humidity 계수를 결정지음
		- 높은 상대 습도는 낮은 온도와 낮은 습도 기울기와 관계되어 있다. 그래서 음수 값이 기대된다. (온도 항에 반대되는)
- 이 모델은 사막 표면과 높은 초목 지역 표면에서 유효

#### 2.1.1 Limitation
Thiermann-Kohnle model은 daytime과 sunset과 sunrise 결과를 포함한다. 하지만 nighttime에 대한 $C_n^2$ 값을 포함하지 않는다. 넓은 범위의 기상학적 조건에서는 측정된 결과에는 높은 correlation이 보인다. 
하지만 포함되지 않은 condition **( 습도>92%, 풍속 > 11m/s)** 에서는 그렇지 않다. 이러한 한계의 경우 MOS theory가 $C_n^2$ 값의 예측에 대해 더 신뢰할 수 있다. 

하지만 **2m/s 미만의 풍속 뿐만 아니라 밤의 경우**에는 the Thiermann-Kohnle model은 안정된 조건에서도 MOS thoery의 이용 가능 제약 때문에 사용할 수 없다.
따라서 2가지 모델의 한계에도 불구하고 서로 $C_n^2$ 예측에 대해 보충한다.



cn^2 지상으로
cn^2 고도로 따른 모델링을 해서

  

오직 지표면을 있는 data를 가지고 고도 data 3차원 4차원 t에 대한 cn^2 예측값

  

그 정보를 쉽게 볼 수 있는 gui를 짜보기