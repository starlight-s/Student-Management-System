package com.app.helper;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.web.multipart.MultipartFile;

import com.app.DAO.CourseDAO;
import com.app.model.Course;
import com.app.model.Student;

@Configurable
public class HelperStudentProfile {
	//check that file is of excel type or not
	
	
	
    public static boolean checkExcelFormat(MultipartFile file) {

        String contentType = file.getContentType();
        if (contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")) {
            return true;
        } else {
            return false;
        }
    }
    
  //convert excel to list of products
    public static List<Student> convertExcelToListOfStudents(int course_id,InputStream is,CourseDAO courseDAO) {
        List<Student> list = new ArrayList<>();
        try {
        		XSSFWorkbook workbook = new XSSFWorkbook(is);
        		XSSFSheet sheet = workbook.getSheet("Sheet1");
        		int rowNumber = 0;
        		Iterator<Row> iterator = sheet.iterator();
        		while (iterator.hasNext()) {
                Row row = iterator.next();
                if (rowNumber == 0) 
                {
                    rowNumber++;
                    continue;
                }
                Iterator<Cell> cells = row.iterator();
                int sid = 0;
                Student sm = new Student();

                while (cells.hasNext()) 
                {
                	Course c = courseDAO.findByCourseId(course_id);
            		sm.setCourse(c);
                		Cell cell = cells.next();
                		switch(sid)
                		{
                		case 0:
                			sm.setPrn((long) cell.getNumericCellValue());
                			break;
                		
                		case 1:
                			sm.setName(cell.getStringCellValue());
                			break;
                		
                		case 2:
                			sm.setEmail(cell.getStringCellValue());
                			break;       
                			
                		case 3:
                			sm.setDateOfBirth(cell.getDateCellValue());
                			break;
                			
                		case 4:
                			sm.setAddress(cell.getStringCellValue());
                			break;
                		
                		case 5:
                			sm.setMobileNo((long) cell.getNumericCellValue());
                			break;
                			
                		case 6:
                			sm.setPassword(cell.getStringCellValue());
                			break;
                			
                		default:
                			break;
                		}
                		sid++;
                }
                list.add(sm);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    } 
    
    
    
}
