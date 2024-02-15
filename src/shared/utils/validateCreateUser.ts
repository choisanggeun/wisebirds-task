import { findExistsEmail } from "../service/users";

export async function validateEmail(value: string) {
  // 미입력 검사
  if (!value) {
    return "아이디(이메일)을 입력하세요.";
  }

  // 길이 및 형식 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value.length < 9 || value.length > 50 || !emailRegex.test(value)) {
    return "올바른 이메일 주소를 입력하세요.";
  }

  //   const existingEmails = await findExistsEmail(value);

  //   // 중복 검사
  //   if (existingEmails) {
  //     return "이미 사용중인 이메일입니다. 다른 이메일을 입력하세요.";
  //   }

  // 모든 검사를 통과한 경우
  return "";
}

export function validatePassword(password: string) {
  // 미입력 검사
  if (!password) {
    return "비밀번호를 입력하세요.";
  }

  // 길이 및 형식 검사
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
  if (!passwordRegex.test(password)) {
    return "8~15자 영문, 숫자, 특수문자를 사용하세요.";
  }

  // 공백 검사
  if (password.trim().includes(" ")) {
    return "비밀번호에 공백을 포함할 수 없습니다.";
  }

  // 모든 검사를 통과한 경우
  return "";
}

export function validateConfirmPassword(
  password: string,
  confirmPassword: string
) {
  // 미입력 검사
  if (!confirmPassword) {
    return "비밀번호를 입력하세요.";
  }

  // 일치 여부 검사
  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다";
  }

  // 모든 검사를 통과한 경우
  return "";
}

export function validateName(name: string) {
  // 미입력 검사
  if (!name) {
    return "이름을 입력하세요.";
  }

  // 길이 및 형식 검사
  const nameRegex = /^[A-Za-z가-힣]{1,16}$/;
  if (!nameRegex.test(name)) {
    return "이름을 올바르게 입력하세요. (숫자, 특수문자, 공백 입력 불가)";
  }

  // 모든 검사를 통과한 경우
  return "";
}
