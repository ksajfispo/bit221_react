/**
 * useReducer : state 생성 및 관리 도구
 * 여러개의 하위 값을 갖는 복잡한 state를 다뤄야 할 때
 * 
 * {
 *    teacher : 'John',
 *    students : ['','',''],
 *    count : 3,
 * }
 * 
 * 3가지 기본 개념 요소
 * [Reducer] : 컴포넌트 state값을 변경  (은행)
 * [Dispatch] : 컴포넌트의 state 변경 요청 (고객) 
 * [Action] : 컴포넌트의 state 변경 내용  (만원 출금)
 * 
 * Dispatch(Action) --> Reducer(State, Actions)==> State Update
 */