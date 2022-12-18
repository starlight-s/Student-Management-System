package com.app.helper;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.app.model.Attendance;



public class MysqlHelper
{
	
	//to check whether file is of excel type
	public static boolean checkExcelFormat(MultipartFile file)
	{
		String contentType=file.getContentType();
		if( contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	
	public static List<Attendance> convertExcelToListOfAttendance(InputStream is)
	{
		 List<Attendance> list = new ArrayList<>();
		
		try
		{
			
		XSSFWorkbook workbook	=new XSSFWorkbook(is);
		XSSFSheet sheet =workbook.getSheet("Sheet1");
		
		
		
		int rownumber=0;
		Iterator<Row> iterator =sheet.iterator();
		
		while(iterator.hasNext())
		{
			Row row=iterator.next();
			if(rownumber==0)
			{
				rownumber++;
				continue;
			}
			
			
			Iterator<Cell> cells = row.iterator();
			int cid=0;
			
			Attendance a= new Attendance();
			
			
			while(cells.hasNext())
			{
				Cell cell=cells.next();
				
				switch(cid)
				{
				case 0:
					a.setPrn((long)cell.getNumericCellValue());
					break;
				case 1:
					a.setStud_Name(cell.getStringCellValue());
					break;
				case 2:
					a.setCourseName(cell.getStringCellValue());
					break;
				case 3:
					a.setSubjectName(cell.getStringCellValue());
					break;
				case 4:
					a.setDate(cell.getDateCellValue());
					break;
				default:
					break;
				
				}
				cid++;
			}
			list.add(a);
		}
			
		}catch (Exception e)
		{
			e.printStackTrace();
		}
		
		return list;
	}
	
	
}
