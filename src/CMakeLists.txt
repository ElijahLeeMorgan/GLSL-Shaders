cmake_minimum_required(VERSION 3.0.0)
project(hellow_window VERSION 1.0.0)

add_executable(hello_window ../src/config.h ../src/main.cpp)

target_include_directories(hello_window PRIVATE dependencies)

target_link_libraries(hello_window glfw)