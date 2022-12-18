package com.app.helper;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartFile;

import com.app.DAO.StudentDAO;
import com.app.DAO.SubjectDAO;
import com.app.model.ModulePerformance;
import com.app.model.Student;
import com.app.model.Subject;

@Configurable
public class Helper {
	
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

    public static List<ModulePerformance> convertExcelToListOfModulePerformance(int subject_id,InputStream is,StudentDAO studentDAO,SubjectDAO subjectDAO) {
        List<ModulePerformance> list = new ArrayList<>();
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
                int cid = 0;
                ModulePerformance mp = new ModulePerformance();
                while (cells.hasNext()) 
                {
                		Subject sub = subjectDAO.findBySubjectId(subject_id);
                		mp.setSubject(sub);
                		//mp.setSubjectId(subject_id);               
                    	Cell cell = cells.next();
                    	switch (cid) 
                    	{
                        	case 0:
                        		Student stud = studentDAO.findByPrn((long) cell.getNumericCellValue());
                        		mp.setStudent(stud);
//                        		mp.setPrn((long) cell.getNumericCellValue());
                        		break;
                        	
                        	case 2:
                        		mp.setLabExam((int) cell.getNumericCellValue());
                        		break;
                        		
                        	case 3:
                        		mp.setInternal((int) cell.getNumericCellValue());
                        		break;
                        		
                        	case 4:
                        		mp.setCcee((int) cell.getNumericCellValue());
                        		break;
                        		
                        	default:
                        		break;
                    	}
                    	cid++;
                }
                list.add(mp);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }
}
