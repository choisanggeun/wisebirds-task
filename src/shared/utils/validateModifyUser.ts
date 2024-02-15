export function validateName(text: string) {
  // 한글, 영문, 1~16자를 확인하는 정규 표현식
  const regex = /^[A-Za-z가-힣]{1,16}$/;

  if (regex.test(text)) {
    return false;
  } else {
    return true;
  }
}
