package com.example.CareerPT.utility;

import java.time.LocalDateTime;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.CareerPT.exception.JobPortalException;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;

@RestControllerAdvice
public class ExceptionControllerAdvice {

    @Autowired
    private Environment environment;

    // 1️⃣ FIRST: Specific handler for your custom exception
    @ExceptionHandler(JobPortalException.class)
    public ResponseEntity<ErrorInfo> handleJobPortalException(JobPortalException exception) {

        // If messages are NOT in application.properties, use the message directly
        String msg = environment.getProperty(exception.getMessage(), exception.getMessage());

        ErrorInfo error = new ErrorInfo(
                msg,
                HttpStatus.BAD_REQUEST.value(),
                LocalDateTime.now()
        );

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    // 2️⃣ Validation exception handler
    @ExceptionHandler({MethodArgumentNotValidException.class, ConstraintViolationException.class})
    public ResponseEntity<ErrorInfo> validatorExceptionHandler(Exception exception) {

        String msg = "";

        if (exception instanceof MethodArgumentNotValidException manvException) {
            msg = manvException.getAllErrors()
                    .stream()
                    .map(ObjectError::getDefaultMessage)
                    .collect(Collectors.joining(", "));
        } else {
            ConstraintViolationException cvException = (ConstraintViolationException) exception;
            msg = cvException.getConstraintViolations()
                    .stream()
                    .map(ConstraintViolation::getMessage)
                    .collect(Collectors.joining(", "));
        }

        ErrorInfo error = new ErrorInfo(
                msg,
                HttpStatus.BAD_REQUEST.value(),
                LocalDateTime.now()
        );

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

    // 3️⃣ LAST: Catch-all exception handler
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorInfo> generalException(Exception exception) {

        ErrorInfo error = new ErrorInfo(
                exception.getMessage(),
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                LocalDateTime.now()
        );

        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
